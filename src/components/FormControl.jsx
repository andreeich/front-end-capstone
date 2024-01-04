import PropTypes from "prop-types";
import chevron from "../assets/chevron-down.svg";

const FormControl = ({
  name = "name",
  labelText = "Name",
  placeholderText = "Name",
  type = "text",
  icon,
  details,
  options,
  req = false,
  onChange,
  value = "",
  inputRef,
}) => {
  return (
    <div className="w-full space-y-2">
      <div className="space-y-[0.375rem]">
        <label htmlFor={name} className="text-text-sm/text-sm text-gray-700">
          {labelText}
        </label>
        <div className="flex items-center gap-2 py-[0.625rem] px-[0.875rem] overflow-hidden border border-gray-300 rounded-md shadow-xs bg-base-white">
          {icon && <img src={icon} alt="icon" />}
          {type == "select" ? (
            <>
              <select
                name="select"
                required={req}
                className="text-text-md/text-md text-gray-500 outline-none w-full h-full appearance-none bg-base-white"
                onChange={onChange}
                ref={inputRef}
              >
                {options?.map((option, key) => (
                  <option key={key} value={option.toLowerCase()}>
                    {option}
                  </option>
                ))}
              </select>
              <img src={chevron} alt="icon" />
            </>
          ) : (
            <input
              id={name}
              type={type}
              placeholder={placeholderText}
              className=" text-text-md/text-md text-gray-500 bg-base-white outline-none w-full "
              required={req}
              defaultValue={value}
              onChange={onChange}
              ref={inputRef}
            />
          )}
        </div>
      </div>
      {details && (
        <p className="text-text-sm/text-sm text-gray-700">{details}</p>
      )}
    </div>
  );
};

FormControl.propTypes = {
  name: PropTypes.string,
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  details: PropTypes.string,
  options: PropTypes.array,
  req: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  inputRef: PropTypes.any,
};

export default FormControl;
