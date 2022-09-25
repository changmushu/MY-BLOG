import "./Post.css"
import { NavLink } from "react-router-dom";

export default function Post() {
  return (
    <div className="post">
      <NavLink className="postCat" to="/single"><img className="postImg" src={require("../../assets/000033.jpg")} alt="" /></NavLink>
      <div className="postInfo">
        <div className="postCats">
          <NavLink className="postCat" to="/single" >【Olympus35-S】第一台胶片相机</NavLink>
        </div>
        <span className="postDate">2022/9/24</span>
      </div>
    </div>

  )
}
