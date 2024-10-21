import { f } from "../utils/f";
import {
  eExpand,
  generateCD0,
  generateCDs,
  generateKSs,
  hexStringToBinary,
  premute,
} from "../utils/utils";

type Props = {
  message: string;
  keyValue: string;
};

function PCheck({ message, keyValue }: Props) {
  const right = premute(hexStringToBinary(message)).slice(32);
  const rightExpanded = eExpand(right);

  const cd0 = generateCD0(hexStringToBinary(keyValue));
  const cds = generateCDs(cd0);
  const kss = generateKSs(cds);

  const p = f(rightExpanded, kss[1]);
  const P = "10100000101111001100001010011101";
  const checkP = p.join("") === P ? true : false;
  return (
    <div>
      <p>p: {p}</p>
      <p className={checkP ? "text-green-600" : "text-red-600"}>
        p check: {String(checkP)}
      </p>
    </div>
  );
}

export default PCheck;
