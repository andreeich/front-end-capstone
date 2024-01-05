import { Route, Routes, useNavigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import BookingCompletePage from "./pages/BookingCompletePage";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "./services/BookingAPI";
import { useEffect } from "react";

const getDate = (dd) => {
  const date = dd ? new Date(dd) : new Date();
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set_data": {
      return {
        ...state,
        date: action.date,
        times: action.times,
      };
    }
    case "add_reservation": {
      return {
        ...state,
        reservation: {
          name: action.name,
          date: action.date,
          time: action.time,
          occasion: action.occasion,
          guests: action.guests,
          call: action.call,
          number: action.number,
        },
      };
    }
    default: {
      throw Error("Unknown action.");
    }
  }
};

const App = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, {
    date: "",
    times: [],
    reservation: {
      name: "",
      date: "",
      time: "",
      occasion: "",
      guests: 0,
    },
  });

  const setData = (date) => {
    fetchAPI(date).then((times) => {
      dispatch({
        type: "set_data",
        date,
        times,
      });
    });
  };

  const updateTimes = (date, time) => {
    submitAPI(date, time).then(() => {
      setData(date);
    });
  };

  const addReservation = (name, date, time, occasion, guests, call) => {
    const number = Math.floor(100000000 + Math.random() * 900000000);
    dispatch({
      type: "add_reservation",
      name,
      date,
      time,
      occasion,
      guests: parseInt(guests),
      call,
      number,
    });
    updateTimes(date, time);
    navigate("/reservation-complete");
  };

  useEffect(() => {
    setData(getDate());
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/reservation"
          element={
            <BookingPage
              date={state.date}
              times={state.times}
              setData={setData}
              updateTimes={updateTimes}
              addReservation={addReservation}
            />
          }
        />
        <Route
          path="/reservation-complete"
          element={
            <BookingCompletePage
              name={state.reservation.name}
              date={state.reservation.date}
              time={state.reservation.time}
              occasion={state.reservation.occasion}
              guests={state.reservation.guests}
              number={state.reservation.number}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
