import ToBar from "../topbar/ToBar"
import "./Header.css"


export default function Header() {
  return (
    <>
      <ToBar />
      <div>
        <img className="topimg" src={require("../../assets/TopBar.jpg")} alt="" />
      </div>
      <div className='header' >
        <div className="headerTitles">
          <span className="headerTitleSm">
            --Sally Rooney
          </span>
          <span className="headerTitleLg">
            Normal People
          </span>
        </div>
      </div>
    </>

  )
}
