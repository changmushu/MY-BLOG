import "./Posts.css"
import Post from "../Post/Post"
import Post1 from "../Post/Post1"
import Post2 from "../Post/Post2"
import Post3 from "../Post/Post3"
import Post4 from "../Post/Post4"

export default function Posts() {
  return (
    <div className="posts">
        <Post4 />
        <Post3 />
        <Post2 />
        <Post1 />
    </div>
  )
}
