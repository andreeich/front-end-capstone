import PropTypes from "prop-types";
// import Button from "../components/Button";

// import image from "../assets/image-3.png";
// import FormControl from "../components/FormControl";

// import dateIcon from "../assets/calendar-date.svg";
// import Checkbox from "../components/Checkbox";
// import { useRef } from "react";
// import { useEffect } from "react";

function BookingCompletePage({ name, date, time, occasion, guests, number }) {
  return (
    <main>
      <section className="box">
        <section className="container content">
          <div className="space-y-5 max-w-p">
            <h2>Reserve a table</h2>
            <p>
              Dear {name},
              <br />
              Thank you for choosing Little Lemon! We&apos;re thrilled to
              confirm your reservation for an unforgettable dining experience.
            </p>
            <p>Here are the details of your reservation:</p>
            <p className="text-text-lg/text-lg md:text-text-xl/text-xl font-bold">
              Reservation Details:
            </p>
            <ul className="list-disc list-inside">
              <li>Date: {date}</li>
              <li>Time: {time}</li>
              <li>
                Occasion: {occasion.charAt(0).toUpperCase() + occasion.slice(1)}
              </li>
              <li>Number of Guests: {guests}</li>
            </ul>
            <p className="text-text-lg/text-lg md:text-text-xl/text-xl font-bold">
              Confirmation Number:
            </p>
            <ul className="list-disc list-inside">
              <li>
                Your unique confirmation number is: #{number}. Please keep this
                for reference.
              </li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}

BookingCompletePage.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  occasion: PropTypes.string,
  guests: PropTypes.number,
  number: PropTypes.number,
};

export default BookingCompletePage;
