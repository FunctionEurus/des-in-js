import { des } from "../utils/des";

type Props = {
  keyValue: string;
  message: string;
};

const REAL = "1010101000111001101110010111011101111110111111000011110000010100";

function OutputCheck({ keyValue, message }: Props) {
  const output = des(message, keyValue);
  const checkOutput = output === REAL ? true : false;
  return (
    <div>
      <p>final output: {output}</p>
      <p className={checkOutput ? "text-green-600" : "text-red-600"}>
        final output check: {String(OutputCheck)}
      </p>
    </div>
  );
}

export default OutputCheck;
