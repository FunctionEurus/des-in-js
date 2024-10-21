"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import BinaryCheck from "./components/BinaryCheck";
import Cd0Check from "./components/Cd0Check";
import CdsCheck from "./components/CdsCheck";
import KssCheck from "./components/KssCheck";
import LeftAndRightCheck from "./components/LeftAndRightCheck";
import OutputCheck from "./components/OutputCheck";
import PCheck from "./components/pCheck";
import PremutedCheck from "./components/PremutedCheck";
import RightExpandedCheck from "./components/RightExpandedCheck";
import Display from "./components/Display";
import { useStore } from "./states/store";

export default function Home() {
  const { message, key } = useStore();
  return (
    <>
      <Display />

      {/* <BinaryCheck message={message} keyValue={key} /> */}
      {/* <PremutedCheck message={message} /> */}
      {/* <LeftAndRightCheck message={message} /> */}
      {/* <RightExpandedCheck message={message} /> */}
      {/* <Cd0Check keyValue={key} /> */}
      {/* <CdsCheck keyValue={key} /> */}
      {/* <KssCheck keyValue={key} /> */}
      {/* <PCheck keyValue={key} message={message} /> */}
      {/* <OutputCheck keyValue={key} message={message} /> */}
    </>
  );
}
