import SideBar from "../../components/sidebar/SideBar"
import "./Setting.css"

export default function Setting() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsTitleUpdate">Update Your Account</span>
            <span className="settingsTitleDelete">Delete Account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
            <img className="settingsPP" src={require("../../assets/setting.jpg")} alt="" />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="chang" />
            <label>Email</label>
            <input type="text" placeholder="chang@gmail.com" />
            <label>Password</label>
            <input type="text" />
            <button className="settingsSubmitButton">Update</button>
          </form>
        </div>
        <SideBar />
    </div>
  )
}
