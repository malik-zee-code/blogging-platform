import moment from "moment";
import React from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

type DatePickerT = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: DateValueType;
  onChange: (value: DateValueType, e?: HTMLInputElement | null | undefined) => void;
};
const DateRangePicker: React.FC<DatePickerT> = ({ value, onChange }) => {
  return (
    <div className="w-full max-w-[600px] flex">
      <Datepicker
        primaryColor="violet"
        useRange
        value={value}
        onChange={onChange}
        containerClassName={
          "relative w-full text-gray-700 outline-none border border-purple h-full  bg-white px-2 py-2 "
        }
        inputClassName={
          "relative transition-all outline-none duration-300 py-2.5 pl-9 pr-2 w-full border-gray-300 text-[13px] top-1"
        }
        toggleClassName={
          "absolute  left-0 bottom-0 h-full px-3 text-purple font-semibold focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
        }
        popoverDirection="down"
        showShortcuts
        separator=" to "
        configs={{
          shortcuts: {
            last3Days: {
              text: "Last 3 days",
              period: {
                start: moment(Date.now()).subtract(3, "days").format("YYYY-MM-DD"),
                end: moment(Date.now()).subtract(1, "days").format("YYYY-MM-DD"),
              },
            },
            yesterday: "Yesterday",
            customToday: {
              text: "Custom Today",
              period: {
                start: moment(Date.now()).format("YYYY-MM-DD"),
                end: moment(Date.now()).format("YYYY-MM-DD"),
              },
            },
            next8Days: {
              text: "Next 8 days",
              period: {
                start: moment(Date.now()).add(1, "days").format("YYYY-MM-DD"),
                end: moment(Date.now()).add(7, "days").format("YYYY-MM-DD"),
              },
            },
          },
        }}
      />
    </div>
  );
};

export default DateRangePicker;
