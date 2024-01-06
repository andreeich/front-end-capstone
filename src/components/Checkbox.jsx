import PropTypes from "prop-types";
import check from "../assets/check.svg";

const Checkbox = ({ name = "check", text = "check", fieldProps }) => {
  return (
    <label className="flex items-center gap-3 text-text-md/text-md text-gray-600">
      <span className="checkbox">
        <input type="checkbox" name={name} id={name} {...fieldProps} />
        <img src={check} alt="icon" />
      </span>{" "}
      {text}
    </label>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  req: PropTypes.bool,
  inputRef: PropTypes.any,
};

export default Checkbox;
