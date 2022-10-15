import "./Post.css"
import { NavLink } from "react-router-dom";

export default function Post() {
  return (
    <div className="post">
        <NavLink className="postCat" to="/single4"><img className="postImg" src={require("../../assets/pexels-sami-2864230.jpg")} alt="" /></NavLink>
        <div className="postInfo">
            <div className="postCats">
                <NavLink className="postCat" to="/single4">旧文|我们的巴黎女郎</NavLink>
            </div>
            <span className="postDate">2022/10/08</span>
        </div>
    </div>

  )
}
