import { Field } from "formik";
import { classNames } from "../../../utils/classNames";

type CheckboxT = {
  label: string;
  className?: string;
  containerClass?: string;
  labelClass?: string;
  error?: string;
  name?: string;
  id: string;
  validate?: () => void;
  disabled?: boolean;
  value: string | number;
  defaultChecked?: boolean;
  required?: boolean;
  touched?: boolean;
  as?: "form" | "normal";
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Checkbox: React.FC<CheckboxT> = ({
  label,
  as = "normal",
  name,
  labelClass,
  containerClass,
  required,
  defaultChecked,
  id,
  value,
  checked,
  onChange,
}) => {
  return (
    <div className={classNames("", containerClass)}>
      <div className={classNames("flex items-center", classNames)}>
        {as === "normal" ? (
          <input
            onChange={onChange}
            required={required}
            checked={checked}
            id={id}
            name={name}
            type="checkbox"
            value={value}
            className="w-4 h-4 text-purple bg-light-gray border-gray rounded focus:ring-purple focus:ring-2 "
          />
        ) : (
          <Field
            onChange={onChange}
            name={name}
            required={required}
            defaultChecked={defaultChecked}
            id={id}
            checked={checked}
            type="checkbox"
            value={value}
            className="w-4 h-4 text-purple bg-light-gray border-gray rounded focus:ring-purple focus:ring-2 "
          />
        )}
        <label
          htmlFor={id}
          className={classNames(
            "ms-2 text-sm font-medium text-gray-900 dark:text-gray-300",
            labelClass
          )}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
