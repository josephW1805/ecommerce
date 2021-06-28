import React from "react";
import Loader from "react-loader-spinner";

const Spinner = () => (
  <div className="container p-5 text-center">
    <Loader type="TailSpin" color="#00BFFF" height={40} width={40} />
  </div>
);

export default Spinner;
