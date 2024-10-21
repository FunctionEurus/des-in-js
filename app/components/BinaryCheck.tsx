import { hexStringToBinary } from "../utils/utils";

type Props = {
  message: string;
  keyValue: string;
};

const MESSAGE_IN_BINARY =
  "0000000100100011010001010110011110001001101010111100110111101111";
const KEY_VALUE_IN_BINARY =
  "0011101100111000100110000011011100010101001000001111011101011110";

function BinaryCheck({ message, keyValue }: Props) {
  const messageInBinary = hexStringToBinary(message);
  const keyValueInBinary = hexStringToBinary(keyValue);

  const checkMessage =
    MESSAGE_IN_BINARY === messageInBinary.join("") ? true : false;
  const checkKeyValue =
    KEY_VALUE_IN_BINARY === keyValueInBinary.join("") ? true : false;
  return (
    <div>
      <p>message: {message}</p>
      <p>message to binary: {messageInBinary}</p>
      <p className={checkMessage ? "text-green-600" : "text-red-600"}>
        check: {String(checkMessage)}
      </p>
      <p>keyValue: {keyValue}</p>
      <p>keyValue to binary: {keyValueInBinary}</p>
      <p className={checkKeyValue ? "text-green-600" : "text-red-600"}>
        check: {String(checkKeyValue)}
      </p>
    </div>
  );
}

export default BinaryCheck;
