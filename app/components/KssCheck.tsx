import {
  generateCD0,
  generateCDs,
  generateKSs,
  hexStringToBinary,
} from "../utils/utils";

type Props = {
  keyValue: string;
};

const KS1 = "010111000000100001001100010101011000111101001111";
const KS2 = "010100010010110111110000011001001001011111001100";
const KS10 = "011010000110000101010111110110011011111110000100";
const KS13 = "101111111000100010010001101001100110000110111011";

function KssCheck({ keyValue }: Props) {
  const cd0 = generateCD0(hexStringToBinary(keyValue));
  const cds = generateCDs(cd0);
  const kss = generateKSs(cds);

  const checkKs1 = kss[1].join("") === KS1 ? true : false;
  const checkKs2 = kss[2].join("") === KS2 ? true : false;
  const checkKs10 = kss[10].join("") === KS10 ? true : false;
  const checkKs13 = kss[13].join("") === KS13 ? true : false;

  return (
    <div>
      {kss.map((ks, i) => {
        if (i > 0)
          return (
            <p key={i}>
              ks{i}: {ks.join("")}
            </p>
          );
      })}
      <p className={checkKs1 ? "text-green-600" : "text-red-600"}>
        ks1 check: {String(checkKs1)}
      </p>
      <p className={checkKs2 ? "text-green-600" : "text-red-600"}>
        ks2 check: {String(checkKs2)}
      </p>
      <p className={checkKs10 ? "text-green-600" : "text-red-600"}>
        ks10 check: {String(checkKs10)}
      </p>
      <p className={checkKs13 ? "text-green-600" : "text-red-600"}>
        ks13 check: {String(checkKs13)}
      </p>
    </div>
  );
}

export default KssCheck;
