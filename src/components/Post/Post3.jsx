import "./Post.css"
import { NavLink } from "react-router-dom";

export default function Post() {
  return (
    <div className="post">
        <NavLink className="postCat" to="/single3"><img className="postImg" src={require("../../assets/000046.jpg")} alt="" /></NavLink>
        <div className="postInfo">
            <div className="postCats">
                <NavLink className="postCat" to="/single3">【一个月】日子的点点滴滴</NavLink>
            </div>
            <span className="postDate">2022/9/25</span>
        </div>
    </div>

  )
}
