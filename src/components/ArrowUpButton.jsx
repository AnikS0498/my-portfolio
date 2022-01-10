import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function ArrowUpButton() {
  return (
    <>
      <div className={`bg-white w-min rounded-full items-center `}>
        <ArrowUpwardIcon fontSize="large" className="cursor-pointer p-2" />
      </div>
    </>
  );
}
