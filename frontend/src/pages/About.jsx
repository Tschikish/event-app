import "../styles/About.css";
import Header from "../partials/Header";
function About() {
  return (
    <div className="about-container">
        <Header />
      <h1>
        Najjači programeri ikada iz Niša. Ako vas zanima koliko santima, 20.
      </h1>
      <div className="profiles">
        <div>
            <h2>Ivan "Zgiboni" Stokilić</h2>
            <img src="/ivan.png" alt="body-builder-1" className="profile-logo"/>
            <p>Dižem gvojze a i bagere. Kodiram jako, brzo, kao i što je moje telo.</p>
        </div>
        <div>
            <h2>Milutin "Sklekovača" Moćni</h2>
            <img src="/comi.png" alt="body-builder-1" className="profile-logo"/>
            <p>100kg na benč, 100 linija na kod. Proteine krkam jer imaju "pro" u nazivu, kao i ja.</p>
        </div>
      </div>
        

    </div>
  );
}

export default About;
