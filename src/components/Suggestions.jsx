import React from "react";
import { SEARCH_SUGGESTIONS } from "../utils/constants";

const Suggestions = () => {
  return (
    <>
      <div className="p-4 mx-auto w-2/3 rounded-2xl flex flex-col items-center bg-slate-200 ">
        <h3 className="text-lg font-semibold my-2">
          People are Searching For...
        </h3>
        <div className="">
          {SEARCH_SUGGESTIONS.map((suggestion, id) => (
            <input
              readOnly
              key={id}
              className="rounded-md border-1 border-neutral-100 bg-white w-35 text-center text-sm m-2 p-1 "
              type="text"
              value={suggestion}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Suggestions;
