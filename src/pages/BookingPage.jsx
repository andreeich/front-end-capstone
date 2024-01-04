import PropTypes from "prop-types";
import Button from "../components/Button";

import image from "../assets/image-3.png";
import FormControl from "../components/FormControl";

import dateIcon from "../assets/calendar-date.svg";
import Checkbox from "../components/Checkbox";
import { useRef } from "react";

function BookingPage({
  date,
  timeOptions,
  updateTimes,
  setDay,
  addReservation,
}) {
  // eslint-disable-next-line no-unused-vars
  const formRef = useRef();
  const nameRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const occasionRef = useRef();
  const guestsRef = useRef();
  const callRef = useRef();

  const occasionOptions = ["Birthday", "Anniversary"];

  const handleDateChange = (e) => {
    const input = e.currentTarget;
    setDay(input.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReservation(
      nameRef.current.value,
      dateRef.current.value,
      timeRef.current.value,
      occasionRef.current.value,
      guestsRef.current.value,
      callRef.current.checked
    );
    updateTimes(timeRef.current.value);
  };

  return (
    <main className="mt-[72px]">
      <section className="box">
        <section className="container grid items-center sm:grid-cols-2 content gap-7xl">
          <form className="space-y-12" onSubmit={handleSubmit}>
            <div className="space-y-5">
              <h4>Reserve a table</h4>
              <p className="text-text-lg/text-lg sm:text-text-xl/text-xl text-brand-600">
                Our friendly team would love to hear from you.
              </p>
            </div>
            <div className="space-y-8">
              <div className="space-y-6">
                <FormControl
                  name="name"
                  labelText="First name"
                  placeholderText="First name"
                  type="text"
                  req={true}
                  inputRef={nameRef}
                />
                <div className="flex flex-col gap-6 sm:flex-row">
                  <FormControl
                    name="date"
                    labelText="Date"
                    placeholderText="12.03.2003 05:30 PM"
                    type="date"
                    value={date}
                    icon={dateIcon}
                    req={true}
                    onChange={handleDateChange}
                    inputRef={dateRef}
                  />
                  <FormControl
                    name="time"
                    labelText="Time"
                    type="select"
                    options={timeOptions}
                    req={true}
                    inputRef={timeRef}
                  />
                </div>
                <div className="flex flex-col gap-6 sm:flex-row">
                  <FormControl
                    name="occasion"
                    labelText="Occasion"
                    placeholderText="Select occasion type"
                    type="select"
                    options={occasionOptions}
                    details="(Birthday, Anniversary)"
                    req={true}
                    inputRef={occasionRef}
                  />
                  <FormControl
                    name="guests"
                    labelText="Number of guests"
                    placeholderText="Number of guests"
                    type="number"
                    req={true}
                    inputRef={guestsRef}
                  />
                </div>
                <Checkbox
                  text="Do not call me to confirm your reservation"
                  name="call"
                  inputRef={callRef}
                />
              </div>
              <Button className="w-full">Submit</Button>
            </div>
          </form>
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
  timeOptions: PropTypes.array,
  updateTimes: PropTypes.func,
  setDay: PropTypes.func,
  addReservation: PropTypes.func,
};

export default BookingPage;
