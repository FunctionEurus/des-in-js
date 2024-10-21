import { generateCD0, hexStringToBinary } from "../utils/utils";

type Props = {
  keyValue: string;
};

const CD0 = "01000100110000000110101111011100100111011000100001111111";

function Cd0Check({ keyValue }: Props) {
  const cd0 = generateCD0(hexStringToBinary(keyValue));
  const checkCd0 = cd0.join("") === CD0 ? true : false;

  return (
    <div>
      <p>cd0: {cd0.join("")}</p>
      <p className={checkCd0 ? "text-green-600" : "text-red-600"}>
        cd0 check: {String(checkCd0)}
      </p>
    </div>
  );
}

export default Cd0Check;
