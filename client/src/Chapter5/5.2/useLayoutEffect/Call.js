import React, { useEffect, useLayoutEffect } from "react";

const Call = () => {
  useEffect(() => {
    console.log("I'm useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("I'm useLayoutEffect");
  }, []);

  console.log("Rendering");

  return (
    <div />
  );
};


export default Call;
