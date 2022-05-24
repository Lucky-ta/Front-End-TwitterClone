import { BiHomeAlt, BiSearchAlt, BiUser } from 'react-icons/bi';

export function OptionsBar() {
  const redirectHomePage = () => {
    window.scrollTo({
      top: 0
    })
  }
  
  return (
    <div className="option-body-div">
      <button onClick={redirectHomePage} className="option-btn"><BiHomeAlt size="2em" /></button>
      <button className="option-btn"><BiSearchAlt size="2em" /></button>
      <button className="option-btn"><BiUser size="2em" /></button>
    </div>
  );
}
