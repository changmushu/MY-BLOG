import "./Post.css"
import { NavLink } from "react-router-dom";

export default function Post() {
  return (
    <div className="post">
        <NavLink className="postCat" to="/single6"><img className="postImg" src={require("../../assets/DSC157.jpg")} alt="" /></NavLink>
        <div className="postInfo">
            <div className="postCats">
                <NavLink className="postCat" to="/single6">【风筝】</NavLink>
            </div>
            <span className="postDate">2022/10/30</span>
        </div>
    </div>

  )
}
