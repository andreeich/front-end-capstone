import { useState, useEffect } from "react";

function BookingCompletePage() {
  const [reservation, setReservation] = useState({
    name: "",
    data: "",
    time: "",
    occasion: "",
    guests: "",
    number: "",
  });

  useEffect(() => {
    try {
      setReservation(JSON.parse(localStorage.getItem("reservation")));
    } catch (e) {
      console.error("Cannot load reservation info!");
    }
  }, []);

  return (
    <main>
      <section className="box">
        <section className="container content">
          <div className="space-y-5 max-w-p">
            <h2>Reserve a table</h2>
            <p data-testid="name">
              Dear {reservation.name},
              <br />
              Thank you for choosing Little Lemon! We&apos;re thrilled to
              confirm your reservation for an unforgettable dining experience.
            </p>
            <p>Here are the details of your reservation:</p>
            <p className="text-text-lg/text-lg md:text-text-xl/text-xl font-bold">
              Reservation Details:
            </p>
            <ul className="list-disc list-inside">
              <li data-testid="date">Date: {reservation.date}</li>
              <li data-testid="time">Time: {reservation.time}</li>
              <li data-testid="occasion">
                Occasion:{" "}
                {reservation.occasion.charAt(0).toUpperCase() +
                  reservation.occasion.slice(1)}
              </li>
              <li data-testid="guests">
                Number of Guests: {reservation.guests}
              </li>
            </ul>
            <p className="text-text-lg/text-lg md:text-text-xl/text-xl font-bold">
              Confirmation Number:
            </p>
            <ul className="list-disc list-inside">
              <li data-testid="number">
                Your unique confirmation number is: #{reservation.number}.
                Please keep this for reference.
              </li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}

export default BookingCompletePage;
