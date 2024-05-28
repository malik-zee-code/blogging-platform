import { Field } from "formik";

const Toggle: React.FC<{ name: string; checked?: boolean; text: string; required?: true }> = ({
  name,
  checked,
  text,
  required = false,
}) => {
  return (
    <label className="inline-flex items-center me-5 cursor-pointer">
      <Field
        required={required}
        type="checkbox"
        name={name}
        value={true}
        className="sr-only !static peer"
        checked={checked}
      />
      <div className="relative w-11 h-6 bg-light-gray rounded-full peer peer-focus:ring-2 peer-focus:ring-purple peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple"></div>
      <span className="ms-3 text-sm font-medium text-gray ">{text}</span>
    </label>
  );
};

export default Toggle;
