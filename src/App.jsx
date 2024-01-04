import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import { useReducer } from "react";

const getDate = (dd) => {
  const date = dd ? new Date(dd) : new Date();
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
};

const findMaxId = (obj) => {
  let max = 0;
  for (let i of obj) {
    if (i.id > max) max = i.id;
  }
  return max;
};

const reducer = (state, action) => {
  const defaultTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  switch (action.type) {
    case "use_time": {
      let availableTimes = state.dates[state.date];
      availableTimes = [
        ...availableTimes.slice(0, availableTimes.indexOf(action.time)),
        ...availableTimes.slice(availableTimes.indexOf(action.time) + 1),
      ];
      return {
        ...state,
        dates: {
          ...state.dates,
          [state.date]: availableTimes,
        },
      };
    }
    case "set_times": {
      return {
        ...state,
        dates: {
          ...state.dates,
          [action.date]: defaultTimes,
        },
      };
    }
    case "set_day": {
      return {
        ...state,
        date: getDate(action.date),
      };
    }
    case "add_reservation": {
      return {
        ...state,
        reservations: [
          ...state.reservations,
          {
            id: findMaxId(state.reservations),
            name: action.name,
            date: action.date,
            time: action.time,
            occasion: action.occasion,
            guests: action.guests,
            call: action.call,
          },
        ],
      };
    }
    default: {
      throw Error("Unknown action.");
    }
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    date: getDate(),
    dates: {},
    reservations: [],
  });

  const getTimes = (date) => {
    if (state.dates?.[date]) {
      return state.dates[date];
    } else {
      dispatch({
        type: "set_times",
        date,
      });
      return state.dates[date];
    }
  };

  const updateTimes = (time) => {
    dispatch({
      type: "use_time",
      time,
    });
  };

  const setDay = (date) => {
    dispatch({
      type: "set_day",
      date: date,
    });
  };

  const addReservation = (name, date, time, occasion, guests, call) => {
    dispatch({
      type: "add_reservation",
      name,
      date,
      time,
      occasion,
      guests,
      call,
    });
  };

  // const timeOptions = getTimes(state.date);
  // console.log(timeOptions);
  const timeOptions = getTimes(state.date);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/reservation"
          element={
            <BookingPage
              date={state.date}
              getDate={getDate}
              setDay={setDay}
              timeOptions={timeOptions}
              updateTimes={updateTimes}
              addReservation={addReservation}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
