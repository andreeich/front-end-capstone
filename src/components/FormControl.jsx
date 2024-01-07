import PropTypes from "prop-types";
import chevron from "../assets/chevron-down.svg";

const FormControl = (props) => {
  const {
    name,
    labelText = "Name",
    placeholderText = "Name",
    type = "text",
    icon,
    onChange,
    options,
    fieldProps,
    touched,
    errors,
  } = props;
  return (
    <div className="w-full space-y-2">
      <div className="space-y-[0.375rem]">
        <label htmlFor={name} className="text-text-sm/text-sm text-gray-700">
          {labelText}
        </label>
        <div
          className={`transition-colors flex items-center gap-2 overflow-hidden border border-gray-300 rounded-md shadow-xs bg-base-white has-[:focus]:border-brand-300 has-[:focus]:ring ring-brand-600/[.24] has-[input:disabled]:bg-gray-50 [select:disabled]:bg-gray-50 has-[:invalid]:border-error-300 has-[:invalid]:ring-error-600/[.24] ${
            touched && errors ? "!border-error-300 ring-error-600/[.24]" : null
          }`}
        >
          {icon && (
            <img
              src={icon}
              alt="icon"
              className="pl-[0.875rem] py-[0.625rem]"
              aria-label={name}
            />
          )}
          {type == "select" ? (
            <>
              <select
                id={name}
                name="select"
                className="text-text-md/text-md placeholder:text-gray-500 disabled:text-gray-500 text-gray-900 outline-none w-full h-full appearance-none bg-base-white py-[0.625rem] pl-[0.875rem]"
                onChange={onChange}
                data-testid={name}
                {...fieldProps}
              >
                <option value="" disabled hidden>
                  Select
                </option>
                {options?.map((option, key) => (
                  <option key={key} value={option.toLowerCase()}>
                    {option}
                  </option>
                ))}
              </select>
              <img
                src={chevron}
                alt="icon"
                className="py-[0.625rem] pr-[0.875rem]"
              />
            </>
          ) : (
            <input
              id={name}
              placeholder={placeholderText}
              className={`text-text-md/text-md placeholder:text-gray-500 disabled:text-gray-500 text-gray-900 bg-base-white outline-none w-full py-[0.625rem] pr-[0.875rem] ${
                !icon && "pl-[0.875rem]"
              }`}
              data-testid={name}
              type={type}
              {...fieldProps}
              onChange={onChange || fieldProps.onChange}
            />
          )}
        </div>
      </div>
      {touched && errors ? (
        <p className="text-text-sm/text-sm text-error-500">{errors}</p>
      ) : null}
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
