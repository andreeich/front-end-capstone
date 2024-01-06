import PropTypes from "prop-types";
import Button from "../components/Button";

import FormControl from "../components/FormControl";

import dateIcon from "../assets/calendar-date.svg";
import Checkbox from "../components/Checkbox";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

function BookingForm({ date, times, setData, addReservation }) {
  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      name: "",
      date: date,
      time: "",
      occasion: "Birthday",
      guests: 2,
      call: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      date: Yup.date().required("Required"),
      time: Yup.string().required("Required"),
      occasion: Yup.string().required("Required"),
      guests: Yup.number()
        .max(6, "Must be 6 guests or less")
        .min(1, "Must be 1 guests or more")
        .required("Required"),
      call: Yup.bool(),
    }),
    onSubmit: (values) => {
      addReservation(values);
    },
  });

  const handleDateChange = (e) => {
    setData(e.currentTarget.value);
    formik.handleChange(e);
  };

  return (
    <form className="space-y-12" onSubmit={formik.handleSubmit}>
      <div className="space-y-5">
        <h3>Reserve a table</h3>
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
            fieldProps={{ ...formik.getFieldProps("name") }}
            touched={formik.touched.name}
            errors={formik.errors.name}
          />
          <div className="flex flex-col gap-6 sm:flex-row">
            <FormControl
              name="date"
              labelText="Date"
              placeholderText="12.03.2003 05:30 PM"
              type="date"
              icon={dateIcon}
              fieldProps={{ ...formik.getFieldProps("date") }}
              onChange={handleDateChange}
              touched={formik.touched.date}
              errors={formik.errors.date}
            />
            <FormControl
              name="time"
              labelText="Time"
              options={times}
              type="select"
              fieldProps={{ ...formik.getFieldProps("time") }}
              touched={formik.touched.time}
              errors={formik.errors.time}
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-row">
            <FormControl
              name="occasion"
              labelText="Occasion"
              placeholderText="Select occasion type"
              type="select"
              options={["Birthday", "Anniversary"]}
              fieldProps={{ ...formik.getFieldProps("occasion") }}
              touched={formik.touched.occasion}
              errors={formik.errors.occasion}
            />
            <FormControl
              name="guests"
              labelText="Number of guests"
              placeholderText="Number of guests"
              type="number"
              fieldProps={{ ...formik.getFieldProps("guests") }}
              touched={formik.touched.guests}
              errors={formik.errors.guests}
            />
          </div>
          <Checkbox
            name="call"
            text="Do not call me to confirm your reservation"
            fieldProps={{ ...formik.getFieldProps("call") }}
          />
        </div>
        <Button type="submit" className="w-full" disabled={formik.isSubmitting}>
          Submit
        </Button>
      </div>
    </form>
  );
}

BookingForm.propTypes = {
  date: PropTypes.string,
  times: PropTypes.array,
  setData: PropTypes.func,
  addReservation: PropTypes.func,
};

export default BookingForm;
