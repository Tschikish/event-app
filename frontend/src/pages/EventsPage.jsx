import Header from "../partials/Header";
import { useState, useEffect } from "react";
import "../styles/EventsPage.css";


function EventsPage() {

  const [events, setEvents] = useState([])

  const getAllEvents = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/events/all", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || `Request failed: ${res.status}`);
      }
      const saved = await res.json();
      setEvents(saved);
    } catch (e2) {
      console.log(e2.message);
    }
  };
  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div>
      <Header />
      <section className="events-section">
        <h1 className="event-header">Events</h1>
        {events.length === 0 && <p>No events found.</p>}
        {events.map((ev) => (
          <div key={ev._id} className="event-card" style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
            <p><strong>Location:</strong> {ev.location}</p>
            <p><strong>Picture ID:</strong> {ev.pictureID}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default EventsPage;
