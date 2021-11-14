import React, { useState, useEffect } from "react";

const Select = ({ options, onSelect }) => {
  const [value, setValue] = useState("Select country");
  const [showOpt, setShowOpt] = useState(false);

  useEffect(() => {
    if (value) {
      onSelect(value);
      setShowOpt(false);
    }
  }, [value]);

  return (
    <div
      className={`col select  ${value && "filled"}`}
      tabIndex="-1"
      onClick={(e) => {
        setShowOpt(!showOpt);
        e.target.focus();
      }}
    >
      <p>{value}</p>
      {showOpt && (
        <div className={`col optionWrapper`}>
          {options.map((option) => (
            <div
              onClick={() => setValue(option)}
              className={`row option ${value === option && "selected"} `}
            >
              <p>{option}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
