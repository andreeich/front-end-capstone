import PropTypes from "prop-types";

import image from "../assets/image-3.png";
import BookingForm from "../components/BookingForm";

function BookingPage({ date, times, setData, addReservation }) {
  return (
    <main>
      <section className="box">
        <section className="container grid items-center sm:grid-cols-2 content gap-7xl">
          <BookingForm
            date={date}
            times={times}
            setData={setData}
            addReservation={addReservation}
          />
          <section className="hidden sm:block">
            <img
              className="object-cover w-full h-full rounded-2xl "
              src={image}
              alt=""
            />
          </section>
        </section>
      </section>
    </main>
  );
}

BookingPage.propTypes = {
  date: PropTypes.string,
  times: PropTypes.array,
  setData: PropTypes.func,
  addReservation: PropTypes.func,
};

export default BookingPage;
