"use client";
import { Next13ProgressBar } from "next13-progressbar";
import React from "react";

const ProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Next13ProgressBar
        height="4px"
        color="#13b8d9"
        options={{ showSpinner: false }}
        // showOnShallow
      />
      {children}
    </>
  );
};

export default ProgressBarProvider;
