import React from 'react';
import { Link } from 'react-router-dom';

const SubmitBtn = (props) => {
  return (
    <div className="border rounded transition  bg-black flex justify-center items-center font-bold hover:shadow-2xl hover:bg-green-600">
      <button disabled={props.disabled} className="text-white text-lg p-1 disabled:bg-slate-300  ">{props.ButtonText}</button>
    </div>
  );
};

export default SubmitBtn;
