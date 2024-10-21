import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type State = {
  message: string;
  key: string;
  output: string;
};

export type Actions = {
  setMessage: (message: string) => void;
  setKey: (key: string) => void;
  setOutput: (output: string) => void;
};

export const useStore = create<State & Actions, [["zustand/immer", never]]>(
  immer((set) => ({
    message: "0123456789abcdef",
    key: "3b3898371520f75e",
    output: "",
    setMessage: (message) =>
      set((state) => {
        state.message = message;
      }),
    setKey: (key) =>
      set((state) => {
        state.key = key;
      }),
    setOutput: (output) =>
      set((state) => {
        state.output = output;
      }),
  }))
);
