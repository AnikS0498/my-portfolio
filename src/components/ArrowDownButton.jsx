import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function ArrowDownButton({ arrowDownClicked }) {
  return (
    <>
      <div
        className={`bg-white w-min rounded-full items-center ${
          !arrowDownClicked && "animate-bounce"
        } `}
      >
        <ArrowDownwardIcon fontSize="large" className="cursor-pointer p-2" />
      </div>
    </>
  );
}
