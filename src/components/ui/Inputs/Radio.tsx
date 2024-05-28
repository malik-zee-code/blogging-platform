import React from "react";
import { Field } from "formik";

type OptionT = {
  id: string;
  label: string;
  value: string;
  checked: boolean;
};
type InputsT = {
  name: string;
  options: OptionT[];
  error?: string;
  touched?: boolean;
  required: true;
};
const Radio: React.FC<InputsT> = ({ name, options, required, error, touched = false }) => {
  return (
    <>
      <Field name={name}>
        {({ field }: { field: any }) =>
          options?.map((p: OptionT, i: number) => (
            <div className="" key={i}>
              <input
                {...field}
                type="radio"
                className="mr-3"
                name={name}
                id={p.id}
                value={p.value}
                checked={p.checked}
                required={required}
              />
              <label htmlFor={p.id} className="capitalize">
                {p.label}
              </label>
            </div>
          ))
        }
      </Field>

      {touched && error && <span className="text-danger">{error}</span>}
    </>
  );
};

export default Radio;
