import { Link } from "react-router-dom"

export default function Home () {
    return (
        <section className="home_container">
        <h1 className="home_title">You got the travel plans, we got the travel vans.</h1>
        <p className="home_text">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link to="vans"><button className="home_button">Find your van</button></Link>
        </section>
    )
}