"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Car = {
  id: string; title: string; year: number; price: number | null; status: string;
  images: string[]; specs: string; location: string; mileage: string;
};

export default function DashboardCars() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [sort, setSort] = useState("recent");

  const load = useCallback(async () => {
    setLoading(true); setError("");
    try {
      const response = await fetch("/api/cars", { cache: "no-store" });
      if (!response.ok) throw new Error("Listings are temporarily unavailable.");
      const result: unknown = await response.json();
      if (!Array.isArray(result)) throw new Error("Unexpected inventory response.");
      setCars(result as Car[]);
    } catch {
      setError("We could not load the car listings. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { void load(); }, [load]);

  const available = useMemo(() => cars.filter(car => car.status === "available"), [cars]);
  const filtered = useMemo(() => {
    const q = query.toLocaleLowerCase().trim();
    const maxPrice = price ? Number(price) : Infinity;
    const minYear = year ? Number(year) : 0;
    const selection = available.filter(car =>
      (!q || [car.title, car.specs, car.location, car.mileage].some(field => String(field || "").toLocaleLowerCase().includes(q))) &&
      (car.year >= minYear) &&
      (!price || (car.price !== null && Number(car.price) <= maxPrice))
    );
    if (sort === "price-low") selection.sort((a, b) => Number(a.price) - Number(b.price));
    if (sort === "price-high") selection.sort((a, b) => Number(b.price) - Number(a.price));
    if (sort === "year-new") selection.sort((a, b) => b.year - a.year);
    return selection;
  }, [available, query, year, price, sort]);
  const reset = () => { setQuery(""); setYear(""); setPrice(""); setSort("recent"); };

  return <section className="section"><div className="container">
    <div className="eyebrow">K&Z CAR INVENTORY</div>
    <h2>Available Cars</h2>
    {loading ? <div className="kz-inventory-message" role="status">Loading available cars…</div> :
    error ? <div className="kz-inventory-message" role="alert"><p>{error}</p><button className="kz-inventory-clear" onClick={() => void load()}>Retry</button></div> :
    available.length === 0 ? <div className="kz-inventory-message">
      <h3>Our Inventory Is Being Updated</h3>
      <p>Fresh K&Z vehicle listings and verified photos are being added.</p>
      <a className="btn btn-primary" href="https://api.whatsapp.com/send?phone=96878967229">Enquire on WhatsApp</a>
    </div> : <>
      <div className="kz-inventory-toolbar">
        <label>Search cars<input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Make, model, specs or area" type="search" /></label>
        <label>Minimum year<select value={year} onChange={e=>setYear(e.target.value)}>
          <option value="">Any year</option>
          {[2025,2023,2020,2018,2015,2010,2000].map(y=><option key={y} value={y}>{y} or newer</option>)}
        </select></label>
        <label>Maximum price<select value={price} onChange={e=>setPrice(e.target.value)}>
          <option value="">Any price</option>
          {[1500,2500,3500,5000,7500,10000,15000,25000].map(p=><option key={p} value={p}>{p.toLocaleString("en-OM")} OMR</option>)}
        </select></label>
        <label>Sort by<select value={sort} onChange={e=>setSort(e.target.value)}>
          <option value="recent">Recently added</option>
          <option value="price-low">Price: low to high</option>
          <option value="price-high">Price: high to low</option>
          <option value="year-new">Newest model year</option>
        </select></label>
      </div>
      <p className="kz-inventory-result" role="status">
        Showing {filtered.length} of {available.length} available cars
        {(query || year || price || sort !== "recent") && <button className="kz-inventory-clear" onClick={reset}>Clear filters</button>}
      </p>
      {filtered.length===0 ? <div className="kz-inventory-message"><h3>No matching cars found</h3><p>Try a wider search or different filters.</p></div> :
      <div className="kz-inventory-grid">
        {filtered.map(car=><article className="kz-inventory-card" key={car.id}>
          {car.images?.[0] ? <img src={car.images[0]} alt={car.title} loading="lazy" /> : <div className="kz-inventory-message">Photo coming soon</div>}
          <div className="kz-inventory-content">
            <h3>{car.title}</h3>
            {car.specs && <p>{car.specs.length > 135 ? car.specs.slice(0,135)+"…" : car.specs}</p>}
            <p>{[car.mileage,car.location].filter(Boolean).join(" • ")}</p>
            <strong className="kz-inventory-price">{car.price === null ? "Price on request" : Number(car.price).toLocaleString("en-OM") + " OMR"}</strong>
            <div><Link href={"/cars/listing/"+car.id}>View Details ↗</Link></div>
          </div>
        </article>)}
      </div>}
    </>}
  </div></section>;
}
