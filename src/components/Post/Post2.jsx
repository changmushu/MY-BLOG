import "./Post.css"
import { NavLink } from "react-router-dom";

export default function Post() {
  return (
    <div className="post">
        <NavLink className="postCat" to="/single2"><img className="postImg" src={require("../../assets/000044.jpg")} alt="" /></NavLink>
        <div className="postInfo">
            <div className="postCats">
                <NavLink className="postCat" to="/single2">【自由,无拘无束】四月花丛</NavLink>
            </div>
            <span className="postDate">2022/9/25</span>
        </div>
    </div>

  )
}
