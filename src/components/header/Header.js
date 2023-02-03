import "./header.css"
import imgTima from "./tima.svg"
const Header = () => {
    return (
      <div className="Header">
       <p className="header-name">Keepcorn.com</p>
       <div className="header-actionItems"><img tclassName="imageHeader" src={imgTima}/> <span>Timofei</span></div>
      </div>
    );
  }
  
  export default Header;