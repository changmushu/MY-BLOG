import "./Post.css"
import { NavLink } from "react-router-dom";

export default function Post() {
  return (
    <div className="post">
        <NavLink className="postCat" to="/single5"><img className="postImg" src={require("../../assets/pexels-anton-h-145707.jpg")} alt="" /></NavLink>
        <div className="postInfo">
            <div className="postCats">
                <NavLink className="postCat" to="/single5">大约在冬季</NavLink>
            </div>
            <span className="postDate">2022/10/14</span>
        </div>
    </div>

  )
}
