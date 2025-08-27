import Header from "../partials/Header";

function EventsPage() {

  const getAllEvents = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/events/all", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Request failed: ${res.status}`);
      }

      return (saved = await res.json());
    } catch (e2) {
      setErr(e2.message);
    }
  };

  console.log(getAllEvents());

  return (
    <div>
      <Header />
    </div>
  );
}

export default EventsPage;
