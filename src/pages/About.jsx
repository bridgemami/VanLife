import { Link } from "react-router-dom";
import image from "/images/about-hero.png"
export default function About() {
  return (
    <div>
      <img src={image} alt='about hero image' className="about-hero-image" />
      <section className="about_container">
      <h1 className="about_header">
        Don&apos;t squeeze in a sedan when you could relax in a van.
      </h1>
      <p className="about_text">
        Our mission is to enliven your road trip with the perfect travel van
        rental. Our vans are recertified before each trip to ensure your travel
        plans can go off without a hitch. &#40;Hitch costs extra 😉&#41;
        <br /><br />
        Our team is full of vanlife enthusiasts who know firsthand the magic of
        touring the world on 4 wheels.
      </p>
      </section>
      <section className="about_bottom_container">
        <div className="about_padding">
        <h2>Your destination is waiting.</h2>
        <h2>Your van is ready.</h2>
        <Link className="link-button" to="/vans">Explore our vans</Link>
        </div>
      </section>
    </div>
  );
}
