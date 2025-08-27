import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Header from "../partials/Header";
import "../styles/HomePage.css";

function HomePage() {
  const [form, setForm] = useState({
    pictureID: "",
    title: "",
    description: "",
    location: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState(null);
  const [err, setErr] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMsg(null);
    setErr(null);

    try {
      const res = await fetch("http://localhost:5000/api/events/push", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Request failed: ${res.status}`);
      }

      const saved = await res.json();
      setMsg(`Event created: ${saved.title}`);
      setForm({ pictureID: "", title: "", description: "", location: "" });
      // optionally:
      // navigate("/events");
    } catch (e2) {
      setErr(e2.message);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="home-page">
      <Header />

      <main style={{ maxWidth: 560, margin: "2rem auto" }}>
        <h1>Create Event</h1>
        <form className="input-form" onSubmit={onSubmit}>
          <label>
            Picture ID
            <input
              type="text"
              name="pictureID"
              value={form.pictureID}
              onChange={onChange}
              placeholder="string"
              required
            />
          </label>

          <label>
            Title
            <input
              type="text"
              name="title"
              value={form.title}
              placeholder="title"
              onChange={onChange}
              required
            />
          </label>

          <label>
            Description
            <textarea
              name="description"
              value={form.description}
              onChange={onChange}
              
              rows={4}
              required
            />
          </label>

          <label>
            Location
            <input
              type="text"
              name="location"
              value={form.location}
              placeholder="lokacija"
              onChange={onChange}
              required
            />
          </label>

          <button type="submit" disabled={submitting}>
            {submitting ? "Saving…" : "Create Event"}
          </button>
        </form>

        {msg && <p style={{ color: "green", marginTop: 12 }}>{msg}</p>}
        {err && <p style={{ color: "crimson", marginTop: 12 }}>{err}</p>}
      </main>
    </div>
  );
}

export default HomePage;