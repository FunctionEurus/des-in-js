import { f } from "./f";
import {
  eExpand,
  generateCD0,
  generateCDs,
  generateKSs,
  hexStringToBinary,
  postmute,
  premute,
} from "./utils";

export function des(message: string, key: string): string {
  const messageInBinary = hexStringToBinary(message);
  const keyValueInBinary = hexStringToBinary(key);

  const premuted = premute(messageInBinary);

  const cd0 = generateCD0(keyValueInBinary);
  const cds = generateCDs(cd0);
  const kss = generateKSs(cds);

  const left = new Array(17);
  const right = new Array(17);
  left[0] = premuted.slice(0, 32);
  right[0] = premuted.slice(32);

  for (let i = 1; i <= 16; i++) {
    const rightExpanded = eExpand(right[i - 1]);
    left[i] = [...right[i - 1]];
    const p = f(rightExpanded, kss[i]);
    right[i] = p.map((el, index) => el ^ left[i - 1][index]);
  }

  return postmute(right[16].concat(left[16])).join("");
}
