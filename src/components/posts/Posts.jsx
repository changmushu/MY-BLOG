import "./Posts.css"
import Post from "../Post/Post"
import Post1 from "../Post/Post1"
import Post2 from "../Post/Post2"
import Post3 from "../Post/Post3"

export default function Posts() {
  return (
    <div className="posts">
        <Post />
        <Post1 />
        <Post2 />
        <Post3 />
    </div>
  )
}
