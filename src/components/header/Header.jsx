import ToBar from "../topbar/ToBar"
import "./Header.css"
import DynamicFont from 'react-dynamic-font';



export default function Header() {




  return (
    <>
      <ToBar />

      <div>
      <video muted="muted" className="topvideo" controls autoplay="autoplay" loop >
                    <source src={require('../../assets/pain.mp4')} type="video/mp4" />
                    
                </video>
                {/*<div>
                <img className="topimg" src={require("../../assets/未标题-1.jpg")} alt="" />
  </div>*/}
                
      </div>
      
      {/*<div class="dimback">
        <img className="topimg" src={require("../../assets/TopBar.jpg")} alt="" />
  </div>*/}
      <div className='header' >
        <div className="headerTitles">
          <span className="headerTitleLg">
          <DynamicFont smooth content={"Asako"} />
          <DynamicFont smooth content={"I & II"} />
          </span>
        </div>
      </div>

    </>

  )
}
