import React from "react";

const ScreenWrapper = ({ children }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default ScreenWrapper;
