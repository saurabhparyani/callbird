import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center pt-10">
      <div className="">{children}</div>
    </div>
  );
};

export default layout;
