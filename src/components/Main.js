import React, { useState } from "react";
import SyntaxHighlight from "./syntaxHighlighter/SyntaxHighlighter";
import { FaEye, FaCode } from "react-icons/fa";

const Main = ({ Component, code, css }) => {
  const [isCode, setIsCode] = useState(false);
  return (
    <div
      className="border mx-auto pb-2 shadow-lg"
      style={{ height: "72vh", maxWidth: "1024px" }}
    >
      <div className="flex justify-between px-3 py-2 bg-gray-200">
        {" "}
        <h1>{isCode ? "Code" : "UI"}</h1>{" "}
        <button
          onClick={() => setIsCode(!isCode)}
          title={`Click here to see ${isCode ? "UI" : "Code"}`}
        >
          {isCode ? <FaEye size={25} /> : <FaCode size={25} />}
        </button>
      </div>
      <div className="" style={{ height: "100%", overflow: "auto" }}>
        {isCode ? <SyntaxHighlight code={code} css={css} /> : <Component />}
      </div>
    </div>
  );
};

export default Main;
