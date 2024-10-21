import { hexStringToBinary, premute } from "../utils/utils";

type Props = {
  message: string;
};

const PREMUTED =
  "1100110000000000110011001111111111110000101010101111000010101010";

function PremutedCheck({ message }: Props) {
  const messageInBinary = hexStringToBinary(message);
  const checkPremuted =
    PREMUTED === premute(messageInBinary).join("") ? true : false;
  return (
    <div>
      <p>premuted message: {premute(messageInBinary)}</p>
      {/* <p>
        premuted message 0 number:{" "}
        {premute(messageInBinary).filter((el) => el === 0).length}
      </p> */}
      {/* <p>
    premuted message length: {premute(messageInBinary).length}
  </p> */}
      <p className={checkPremuted ? "text-green-600" : "text-red-600"}>
        checked:
        {String(checkPremuted)}
      </p>
    </div>
  );
}

export default PremutedCheck;
