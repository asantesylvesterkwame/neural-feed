import React from "react";

const FormInput = (props) => {
  return (
    <div className="flex flex-col gap-2.5">
      {/* <label htmlFor={props.LabelForName}>{props.Label}</label> */}
      <input
        type={props.inputType}
        placeholder={props.inputPlaceholder}
        className="outline-none border rounded-lg p-1 "
        name={props.inputName}
        autoComplete="true"
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default FormInput;
