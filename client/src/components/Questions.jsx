import React, { useState } from "react";

export const Questions = () => {
  const [checked, setChecked] = useState(undefined);

  function onSelect() {
    console.log("radio button changed");
  }

  return (
    <div className="questions">
      <h2 className="text-light">Simple Question 1</h2>

      <ul>
        <li>
          <input
            type="radio"
            value={false}
            name="options"
            id="q1-option"
            onChange={onSelect()}
          />

          <label className="text-primary" htmlFor="q1-option">
            Option
          </label>
          <div className="check checked"></div>
        </li>
      </ul>
    </div>
  );
};
