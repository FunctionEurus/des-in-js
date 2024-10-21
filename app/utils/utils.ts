import {
  IP,
  IP_INV,
  LEFT_SHIFTS,
  MESSAGE_EXPANSION,
  PC1,
  PC2,
} from "../constants/constants";

function toBinary(num: number) {
  const binary = [];
  while (num > 0) {
    binary.push(num % 2);
    num = Math.floor(num / 2);
  }
  while (binary.length < 4) {
    binary.push(0);
  }
  return binary.reverse();
}

function hexCharToBinary(char: string) {
  const binary = [];
  if (char >= "0" && char <= "9") {
    const number = char.charCodeAt(0) - "0".charCodeAt(0);
    binary.push(...toBinary(number));
  } else if (char >= "a" && char <= "z") {
    const number = char.charCodeAt(0) - "a".charCodeAt(0) + 10;
    binary.push(...toBinary(number));
  } else if (char >= "A" && char <= "Z") {
    const number = char.charCodeAt(0) - "A".charCodeAt(0) + 10;
    binary.push(...toBinary(number));
  }
  return binary;
}

export function hexStringToBinary(str: string) {
  if (!str) return [];
  const binaryArray = [];
  for (const x of str) {
    binaryArray.push(...hexCharToBinary(x));
  }
  return binaryArray;
}

export function binaryArrayToNumber(arr: number[]): number {
  let output = 0;
  for (const num of arr) {
    output = output * 2 + num;
  }
  return output;
}

export function premute(message: number[]): number[] {
  const n = IP.length;
  const premuted = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    premuted[i] = message[IP[i] - 1];
  }
  return premuted;
}

export function postmute(message: number[]): number[] {
  const n = IP_INV.length;
  const postmute = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    postmute[i] = message[IP_INV[i] - 1];
  }
  return postmute;
}

export function eExpand(message: number[]): number[] {
  const n = MESSAGE_EXPANSION.length;
  const expanded = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    expanded[i] = message[MESSAGE_EXPANSION[i] - 1];
  }
  return expanded;
}

export function generateCD0(keyValue: number[]): number[] {
  const n = PC1.length;
  const CD0 = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    CD0[i] = keyValue[PC1[i] - 1];
  }
  return CD0;
}

function shift(arr: number[], num: number): number[] {
  return arr.slice(num).concat(arr.slice(0, num));
}

export function generateCDs(cd0: number[]): number[][] {
  const n = LEFT_SHIFTS.length + 1; // 16
  const cds = Array.from({ length: n }, () => new Array(56).fill(0));
  cds[0] = cd0;

  for (let i = 1; i < n; i++) {
    const c = shift(cds[i - 1].slice(0, 28), LEFT_SHIFTS[i - 1]);
    const d = shift(cds[i - 1].slice(28), LEFT_SHIFTS[i - 1]);
    for (let j = 0; j < 28; j++) {
      cds[i][j] = c[j];
      cds[i][j + 28] = d[j];
    }
  }

  return cds;
}

export function generateKSs(cds: number[][]): number[][] {
  return cds.map((cd) => {
    const n = PC2.length;
    const ks = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      ks[i] = cd[PC2[i] - 1];
    }
    return ks;
  });
}

export function binaryStringToHex(binaryString: string) {
  binaryString = binaryString.replace(/\s+/g, "");

  let hexString = "";

  for (let i = 0; i < binaryString.length; i += 8) {
    const byte = binaryString.substr(i, 8);
    const hex = parseInt(byte, 2).toString(16);
    hexString += hex.padStart(2, "0");
  }

  return hexString;
}
