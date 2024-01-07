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
        times: action.times,
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
  });
  const today = getDate();

  const setData = (date) => {
    fetchAPI(date).then((times) => {
      dispatch({
        type: "set_data",
        times,
      });
    });
  };

  const updateTimes = (date, time) => {
    submitAPI(date, time).then(() => {
      setData(date);
    });
  };

  const addReservation = (data) => {
    const number = Math.floor(100000000 + Math.random() * 900000000);
    localStorage.setItem("reservation", JSON.stringify({ ...data, number }));
    updateTimes(data.date, data.time);
    navigate("/reservation-complete");
  };

  useEffect(() => {
    setData(today);
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
              date={today}
              times={state.times}
              setData={setData}
              addReservation={addReservation}
            />
          }
        />
        <Route path="/reservation-complete" element={<BookingCompletePage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
