export default function Portfolio() {
  return (
    <div style={{
      background:'black',
      color:'white',
      minHeight:'100vh',
      padding:'50px',
      fontFamily:'Arial'
    }}>

      <h1 style={{
        color:'#f5b400',
        fontSize:'70px',
        fontWeight:'bold'
      }}>
        KZ ELITE BUSINESS
      </h1>

      <h2 style={{
        fontSize:'40px',
        marginTop:'10px'
      }}>
        BUYING & SELLING CARS
      </h2>

      <p style={{
        fontSize:'28px',
        color:'#f5b400',
        marginTop:'20px'
      }}>
        Fast. Fair. Trusted.
      </p>

      <p style={{
        fontSize:'22px',
        maxWidth:'900px',
        lineHeight:'1.8',
        marginTop:'30px'
      }}>
        We help customers buy and sell vehicles quickly,
        safely, and professionally with fair prices,
        trusted service, and advertising across 15+ platforms.
      </p>

      <div style={{
        marginTop:'50px'
      }}>
        <a
          href="https://wa.me/96878967229"
          target="_blank"
          style={{
            background:'#f5b400',
            color:'black',
            padding:'18px 35px',
            borderRadius:'12px',
            textDecoration:'none',
            fontWeight:'bold',
            fontSize:'24px'
          }}
        >
          WhatsApp Us
        </a>
      </div>

      <div style={{
        marginTop:'60px',
        fontSize:'22px',
        lineHeight:'2'
      }}>
        <p>Instagram: @kz_elite_business</p>
        <p>TikTok: @kz_elite_business</p>
        <p>YouTube: @KZEliteBusiness</p>
        <p>Threads: @kz_elite_business</p>
      </div>

    </div>
  )
}