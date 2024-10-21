"use client";

import { BUTTON, INPUT, LABEL } from "../constants/classnames";
import { binaryStringToHex } from "../utils/utils";
import { des } from "../utils/des";
import { useStore } from "../states/store";
import { useEffect, useState } from "react";

const HEX_REGEX = /\b[a-fA-F0-9]+\b/g;

function Display() {
  const { message, setMessage, key, setKey, output, setOutput } = useStore();
  const [showOutput, setShowOutput] = useState(false);
  const [wrongMessageInput, setwrongMessageInput] = useState(false);
  const [wrongKeyInput, setwrongKeyInput] = useState(false);

  const handleMessageChange = (e: { target: { value: string } }) => {
    const tempMessage = e.target.value;
    if (tempMessage.length !== 16 || !tempMessage.match(HEX_REGEX))
      setwrongMessageInput(true);
    else setwrongMessageInput(false);

    setMessage(tempMessage);
  };

  const handleKeyChange = (e: { target: { value: string } }) => {
    const tempKey = e.target.value;
    if (tempKey.length !== 16 || !tempKey.match(HEX_REGEX))
      setwrongKeyInput(true);
    else setwrongKeyInput(false);

    setKey(tempKey);
  };

  const handleClick = () => {
    setShowOutput(true);
  };

  useEffect(() => {
    setOutput(
      (des(message, key).match(/.{1,8}/g) as RegExpMatchArray).join(" ")
    );
  }, [key, message, setOutput]);

  return (
    <div className="space-y-4 mb-4 p-4 rounded-lg bg-card text-card-foreground shadow-sm border-sky-300/40 border-2">
      <div>
        <label
          className={`${LABEL} ${wrongMessageInput ? "text-rose-600" : ""}`}
        >
          {wrongMessageInput ? "Wrong input message" : "Message"}
        </label>
        <input
          className={INPUT}
          value={message}
          onChange={handleMessageChange}
        />
      </div>
      <div>
        <label className={`${LABEL} ${wrongKeyInput ? "text-rose-600" : ""}`}>
          {wrongKeyInput ? "Wrong input key" : "Key"}
        </label>
        <input className={INPUT} value={key} onChange={handleKeyChange} />
      </div>
      <button className={BUTTON} onClick={handleClick}>
        confirm
      </button>
      {showOutput && (
        <div>
          <label className={LABEL}>Final Output: {output}</label>
          <label className={LABEL}>
            Output Message: {binaryStringToHex(output)}
          </label>
        </div>
      )}
      <p className="text-sky-800/80">
        Thanks to:
        <a
          href="https://web.archive.org/web/20170520071415/http://people.eku.edu/styere/Encrypt/JS-DES.html"
          target="_blank"
        >
          https://web.archive.org/web/20170520071415/http://people.eku.edu/styere/Encrypt/JS-DES.html
        </a>
      </p>
    </div>
  );
}

export default Display;
