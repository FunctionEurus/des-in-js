import { eExpand, hexStringToBinary, premute } from "../utils/utils";

type Props = { message: string };

const RIGHT0_EXPANDED = "011110100001010101010101011110100001010101010101";

function RightExpandedCheck({ message }: Props) {
  const right = premute(hexStringToBinary(message)).slice(32);
  const rightExpanded = eExpand(right);
  const checkRightExpanded =
    rightExpanded.join("") === RIGHT0_EXPANDED ? true : false;

  return (
    <div>
      <p>right expanded: {rightExpanded}</p>
      <p className={checkRightExpanded ? "text-green-600" : "text-red-600"}>
        right expanded check: {String(checkRightExpanded)}
      </p>
    </div>
  );
}

export default RightExpandedCheck;
