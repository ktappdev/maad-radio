'use client'
import React from "react";
import { Audio } from 'react-loader-spinner'
const loading = () => {
  return <div className="flex justify-center items-center w-full h-full">
    <Audio
      height="200"
      width="200"
      color="#4fa94d"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={true}
    />
  </div>;
};
// comment
export default loading;
