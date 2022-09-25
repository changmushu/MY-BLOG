import "./Post.css"
import { NavLink } from "react-router-dom";

export default function Post() {
  return (
    <div className="post">
      <NavLink className="postCat" to="/single1"><img className="postImg" src={require("../../assets/DSC1504.jpg")} alt="" /></NavLink>

      <div className="postInfo">
        <div className="postCats">
          <NavLink className="postCat" to="/single1">【Nikon F70】全自动伪宽幅胶片相机</NavLink>
        </div>
        <span className="postDate">2022/9/24</span>
      </div>
    </div>

  )
}
