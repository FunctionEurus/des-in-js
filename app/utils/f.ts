import { P, S } from "../constants/constants";
import { binaryArrayToNumber, hexStringToBinary } from "./utils";

export function f(e: number[], ks: number[]): number[] {
  const n = e.length;
  const xor = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    xor[i] = e[i] ^ ks[i];
  }

  const sbox = new Array(32).fill(0);
  for (let i = 0; i < n / 6; i++) {
    const s = xor.slice(i * 6, i * 6 + 6);
    const row = binaryArrayToNumber([s[0], s[5]]);
    const col = binaryArrayToNumber(s.slice(1, 5));

    const target = S[i][row * 16 + col];
    const targetInBinary = hexStringToBinary(target.toString(16));

    targetInBinary.forEach((el, index) => (sbox[i * 4 + index] = el));
  }

  const output = new Array(P.length).fill(0);
  for (let i = 0; i < sbox.length; i++) {
    output[i] = sbox[P[i] - 1];
  }

  return output;
}
