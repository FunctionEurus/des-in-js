import { generateCD0, generateCDs, hexStringToBinary } from "../utils/utils";

type Props = {
  keyValue: string;
};

const CD1 = "10001001100000001101011110101001001110110001000011111111";
const CD2 = "00010011000000011010111101010010011101100010000111111111";
const CD10 = "11010111101010001001100000000000111111111001001110110001";
const CD13 = "11101010001001100000001101011111111001001110110001000011";

function CdsCheck({ keyValue }: Props) {
  const cd0 = generateCD0(hexStringToBinary(keyValue));
  const cds = generateCDs(cd0);

  const checkCd1 = cds[1].join("") === CD1 ? true : false;
  const checkCd2 = cds[2].join("") === CD2 ? true : false;
  const checkCd10 = cds[10].join("") === CD10 ? true : false;
  const checkCd13 = cds[13].join("") === CD13 ? true : false;

  return (
    <div>
      {cds.map((cd, i) => (
        <p key={i}>
          cd{i}: {cd.join("")}
        </p>
      ))}
      <p className={checkCd1 ? "text-green-600" : "text-red-600"}>
        cd1 check: {String(checkCd1)}
      </p>
      <p className={checkCd2 ? "text-green-600" : "text-red-600"}>
        cd2 check: {String(checkCd2)}
      </p>
      <p className={checkCd10 ? "text-green-600" : "text-red-600"}>
        cd10 check: {String(checkCd10)}
      </p>
      <p className={checkCd13 ? "text-green-600" : "text-red-600"}>
        cd13 check: {String(checkCd13)}
      </p>
    </div>
  );
}

export default CdsCheck;
