import "./SideBar.css"

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">關於我</span>
                <img src={require("../../assets/DSC_415.jpg")} alt="" />
                <p className="sidebarText">像是八月份的雨季 <br />房間裏的空調時好時壞 <br />脫光了衣服躺在涼席上 <br />輾轉反側 <br />半夢半醒不知不覺<br /> 身體已經嵌入了半個荒涼的夜夢裏</p>

            </div>
            {/* <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="ulsidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div> */}
            <div className="sidebarItem">
                <span className="sidebarTitle">给我投稿</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}
