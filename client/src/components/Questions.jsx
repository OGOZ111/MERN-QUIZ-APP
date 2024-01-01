import React, { useEffect, useState } from "react";
import data from "../database/data";

export const Questions = () => {
  const [checked, setChecked] = useState(undefined);

  const question = data[0];

  useEffect(() => {
    console.log(question);
  });

  function onSelect() {
    console.log("radio button changed");
  }

  return (
    <div className="questions">
      <h2 className="text-light">Simple Question 1</h2>

      <ul key={question.id}>
        {question.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={onSelect()}
            />

            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className="check checked"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};
