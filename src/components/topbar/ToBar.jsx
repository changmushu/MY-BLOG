import { NavLink } from "react-router-dom";
import "./ToBar.css"
import { useState, useEffect } from "react";



export default function ToBar() {
  const user = true;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 750) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (

    <>

      <div className={scrolled ? "scrolled" : "top"} >
        <NavLink className="link" to="/"><div className="topLeft">
          {
            user ? (
              <img
                className="topImg"
                src={require("../../assets/logo2.png")}
                alt=""
              />
            ) : (
              <ul className="topList">
                <li className="topListItem">
                  <NavLink className="link" to="/LoginTest">Login</NavLink>
                </li>
                <li className="topListItem">
                  <NavLink className="link" to="/register">Register</NavLink>
                </li>
              </ul>)
          }
        </div></NavLink>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <NavLink className="link" to="/">首頁</NavLink>
            </li>
            <li className="topListItem"><NavLink className="link" to="/about">攝影集</NavLink></li>
            <li className="topListItem"><NavLink className="link" to="/contact">文章</NavLink></li>
            <li className="topListItem"><a className="link" href="https://chatgpt-demo-bay-omega.vercel.app/">ChatGPT</a></li>
          </ul>
        </div>
        <div className="topRight">
          
          <a className={scrolled ? "topIcon1 fa-brands fa-github" : "topIcon fa-brands fa-github"} href="https://github.com/changmushu/MY-BLOG"></a>
          <a className={scrolled ? "topIcon1 fa-brands fa-bilibili" : "topIcon fa-brands fa-bilibili"} href="https://space.bilibili.com/22973070"></a>
        </div>

      </div>
      {/* <div>
        <img className="topimg" src={require("../../assets/headerImg.jpg")} alt="" />
    </div> */}
    </>


  )
}
