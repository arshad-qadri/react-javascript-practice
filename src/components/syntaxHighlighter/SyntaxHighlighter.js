import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SyntaxHighlight = ({ code, css }) => {
  return (
    <div>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: "20px" }}
      >
        {code}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="css"
        style={atomOneDark}
        customStyle={{ padding: "20px" }}
      >
        {css}
      </SyntaxHighlighter>
    </div>
  );
};

export default SyntaxHighlight;
