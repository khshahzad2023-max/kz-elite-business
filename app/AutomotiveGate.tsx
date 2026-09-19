import Link from "next/link";

export default function AutomotiveGate(){
  return <details className="auto-gate-native">
    <summary className="gate-native-front">
      <div className="gate-native-door left"><span>K&Z</span></div>
      <div className="gate-native-door right"><span>ELITE</span></div>
      <div className="gate-native-cta">
        <div className="eyebrow">K&Z AUTOMOTIVE</div>
        <strong>PREMIUM AUTOMOTIVE ENTRANCE</strong>
        <span className="gate-native-button">OPEN THE GATE</span>
        <small>Tap to enter</small>
      </div>
    </summary>
    <div className="gate-native-inside">
      <div className="gate-native-car"><span/><i/><i/></div>
      <div className="eyebrow">K&Z AUTOMOTIVE</div>
      <h2>Your automotive world starts here</h2>
      <p>Cars • Selling • Sourcing • Garage • Rental • Advertising</p>
      <div className="gate-links"><Link href="/cars">Available Cars</Link><Link href="/sell-your-car">Sell Your Car</Link><Link href="/automotive-services">Automotive Services</Link></div>
    </div>
  </details>
}