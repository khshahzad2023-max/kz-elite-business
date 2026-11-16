"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getCarCoverImageStyle } from "./car-cover-framing";

type Car = {
  id: string; title: string; year: number; price: number | null; status: string; finance_available?: boolean;
  images: string[]; specs: string; location: string; mileage: string; cover_zoom?:number;cover_x?:number;cover_y?:number; engine?:string;transmission?:string;origin_specs?:string;make?:string;model?:string;body_type?:string;
};

type BodyCategory = "all" | "suv" | "sedan" | "hatchback" | "other";
const categories: { value: BodyCategory; label: string }[] = [
  { value: "all", label: "All Cars" },
  { value: "suv", label: "SUV" },
  { value: "sedan", label: "Sedan / Saloon" },
  { value: "hatchback", label: "Hatchback" },
  { value: "other", label: "Other" },
];
function bodyCategory(value: string | undefined): Exclude<BodyCategory, "all"> {
  const name = (value || "").trim().toLowerCase();
  if (["suv", "crossover", "4x4", "sport utility vehicle"].includes(name) || name.includes("suv")) return "suv";
  if (["sedan", "saloon"].includes(name)) return "sedan";
  if (["hatchback", "hatch", "hatch back"].includes(name)) return "hatchback";
  return "other";
}

export default function DashboardCars() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<BodyCategory>("all");
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
      (category === "all" || bodyCategory(car.body_type) === category) &&
      (!q || [car.title, car.specs, car.location, car.mileage, car.origin_specs, car.engine, car.transmission].some(field => String(field || "").toLocaleLowerCase().includes(q))) &&
      (car.year >= minYear) &&
      (!price || (car.price !== null && Number(car.price) <= maxPrice))
    );
    if (sort === "price-low") selection.sort((a, b) => Number(a.price) - Number(b.price));
    if (sort === "price-high") selection.sort((a, b) => Number(b.price) - Number(a.price));
    if (sort === "year-new") selection.sort((a, b) => b.year - a.year);
    return selection;
  }, [available, category, query, year, price, sort]);
  const reset = () => { setCategory("all"); setQuery(""); setYear(""); setPrice(""); setSort("recent"); };

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
      <div className="kz-category-filters" role="group" aria-label="Filter cars by body type">
        {categories.map(item => {
          const count = item.value === "all" ? available.length : available.filter(car => bodyCategory(car.body_type) === item.value).length;
          return <button key={item.value} type="button" className={"kz-category-filter" + (category === item.value ? " is-active" : "")} aria-pressed={category === item.value} onClick={() => setCategory(item.value)}>
            <span>{item.label}</span><span className="kz-category-count">{count}</span>
          </button>;
        })}
      </div>
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
        {(category !== "all" || query || year || price || sort !== "recent") && <button className="kz-inventory-clear" onClick={reset}>Clear filters</button>}
      </p>
      {filtered.length===0 ? <div className="kz-inventory-message"><h3>No matching cars found</h3><p>Try another category or adjust the search filters.</p></div> :
      <div className="kz-inventory-grid">
        {filtered.map(car=><article className="kz-inventory-card" key={car.id}>
          <div className="kz-car-card-photo">
            {car.images?.[0] ? <Image src={car.images[0]} alt={car.title} width={720} height={450} sizes="(max-width: 640px) 100vw, (max-width: 1020px) 50vw, 33vw" quality={75} loading="lazy" decoding="async" style={getCarCoverImageStyle(car)} /> : <div className="kz-inventory-message">Photo coming soon</div>}
          </div>
          <div className="kz-inventory-content">
            <h3 className="kz-card-model-title">{car.make?.trim() && car.model?.trim() ? car.make.trim() + " " + car.model.trim() : car.title}</h3>
            <dl className="kz-car-card-facts">
              {([
                ["Model Year", car.year ? String(car.year) : ""],
                ["Mileage", car.mileage?.trim() || ""],
                ["Specs", car.origin_specs?.trim() || ""],
                ["Location", car.location?.trim() || ""],
                ["Engine", car.engine?.trim() || ""],
                ["Transmission", car.transmission?.trim() || ""],
              ] as const).map(([label, value]) =>
                <div className="kz-car-card-fact" key={label}>
                  <dt>{label}</dt>
                  <dd>{value || "\u00a0"}</dd>
                </div>
              )}
            </dl>
            <div className="kz-car-card-footer">
              <div className="kz-car-card-price">
                <span>Asking Price</span>
                <strong className="kz-inventory-price">{car.price === null ? "\u00a0" : Number(car.price).toLocaleString("en-OM") + " OMR"}</strong>
              </div>
              <div className="kz-card-finance-space">
                {car.finance_available ? <span className="kz-car-finance-badge">Finance Option Available</span> : <span aria-hidden="true">{"\u00a0"}</span>}
              </div>
              <Link className="kz-card-view-link" href={"/cars/listing/"+car.id}>View Details <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </article>)}
      </div>}
    </>}
  </div></section>;
}
