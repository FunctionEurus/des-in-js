import { hexStringToBinary, premute } from "../utils/utils";

type Props = {
  message: string;
};

const LEFT0 = "11001100000000001100110011111111";
const RIGHT0 = "11110000101010101111000010101010";

function LeftAndRightCheck({ message }: Props) {
  const left = premute(hexStringToBinary(message)).slice(0, 32);
  const right = premute(hexStringToBinary(message)).slice(32);
  const checkLeft = left.join("") === LEFT0;
  const checkRight = right.join("") === RIGHT0;
  return (
    <div>
      <p>Left: {left.join("")}</p>
      <p className={checkLeft ? "text-green-600" : "text-red-600"}>
        Left check: {String(checkLeft)}
      </p>
      <p>Right: {right.join("")}</p>
      <p className={checkRight ? "text-green-600" : "text-red-600"}>
        Right check: {String(checkRight)}
      </p>
    </div>
  );
}

export default LeftAndRightCheck;
