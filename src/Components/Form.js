import React, { useState, useRef } from "react";
import styles from "../styles/form.module.scss";

import json from "../countryCodes.json";

import Select from "./Select";

const Form = () => {
  const [countryCodes, setCountryCodes] = useState([...json.countries]);
  const [selectedCountry, setSelectedCountry] = useState();
  const [checked, setChecked] = useState(false);
  const [clicked, setClicked] = useState(false);

  const selectRef = useRef();

  return (
    <div className={`col ${styles.wrapper}`}>
      <div className={`col form`}>
        <label className={`row label`}>
          <div className={`icon`}>
            <img src="/first.png" alt="" />
          </div>
          <input type="text" className={`input_text`} required />
          <span className={`floating_label`}>First Name</span>
        </label>
        <label
          className={`row label select`}
          ref={selectRef}
          onClick={() => selectRef.current.focus()}
        >
          <div className={`icon`}>
            <img src="/country.png" alt="" />
          </div>
          <Select
            options={countryCodes.map((country) => country.name)}
            onSelect={(country) => {
              setSelectedCountry(countryCodes.find((c) => c.name === country));
            }}
          />
          <span className={`floating_label ${selectedCountry && "filled"}`}>
            Country
          </span>
        </label>
        <label className={`row label`}>
          <div className={`icon`}>
            <img src="/lock.png" alt="" />
          </div>
          <input type="text" className={`input_text`} required />
          <span className={`floating_label`}>Password</span>
        </label>
        <label className={`row label`}>
          <div className={`icon`}>
            <img src="/email.png" alt="" />
          </div>
          <input type="text" className={`input_text`} required />
          <span className={`floating_label`}>Email</span>
        </label>
        <label className={`row label`}>
          <div className={`icon`}>
            <img src="/second.png" alt="" />
          </div>
          <input type="text" className={`input_text`} required />
          <span className={`floating_label`}>Second name</span>
        </label>
        <label className={`row label`}>
          <div className={`icon`}>
            <img src="/phone.png" alt="" />
          </div>
          <input
            type="tel"
            className={`input_text`}
            required
            tabIndex="-1"
            value={selectedCountry?.code}
          />
          <span className={`floating_label`}>Phone</span>
        </label>
        <label className={`row label`}>
          <div className={`icon`}>
            <img src="/twoLock.png" alt="" />
          </div>
          <input type="text" className={`input_text`} required />
          <span className={`floating_label`}>Confirm password</span>
        </label>

        <div className={`row centered ${styles.text_container}`}>
          <div
            className={`row centered ${styles.checkbox}`}
            onClick={() => setChecked(!checked)}
          >
            {checked && <img src="./Vector.png" alt="" />}
          </div>
          <p className={styles.text}>
            I agree to the{" "}
            <a href="/" className={styles.text__link}>
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
      <div>
        <div className={styles.btn_wrapper}>
          <button
            className={`${clicked ? styles.button_color : styles.button}`}
            onClick={() => setClicked(!clicked)}
          >
            Sing up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
