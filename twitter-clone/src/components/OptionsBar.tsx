import { BiHomeAlt } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";
import { BiUser } from "react-icons/bi";

export function OptionsBar() {
  return (
    <div className="option-body-div">
      <button className="option-btn">{<BiHomeAlt size={'2em'}/>}</button>
      <button className="option-btn">{<BiSearchAlt size={'2em'}/>}</button>
      <button className="option-btn">{<BiUser size={'2em'}/>}</button>
    </div>
  );
}
