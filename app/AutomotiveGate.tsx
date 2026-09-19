import Link from "next/link";

export default function AutomotiveGate(){
 return <div className="auto-gate-native">
  <div className="gate-native-front">
   <div className="gate-native-door left"><span>K&Z</span></div>
   <div className="gate-native-door right"><span>ELITE</span></div>
   <div className="gate-native-cta">
    <div className="eyebrow">K&Z AUTOMOTIVE</div>
    <strong>PREMIUM AUTOMOTIVE ENTRANCE</strong>
    <Link className="gate-native-button" href="/automotive">OPEN THE GATE</Link>
    <small>Enter our automotive division</small>
   </div>
  </div>
 </div>
}