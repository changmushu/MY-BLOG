import SinglePost from "../../components/singlePost/SinglePost"
import ToBar from "../../components/topbar/ToBar"
import "./Single.css"


export default function single() {
  document.documentElement.scrollTop = document.body.scrollTop =0;
  return (
    <>
      <ToBar />
      <div>
        <img className="headerImg" src={require("../../assets/000033.jpg")} alt="" />
      </div>
      <div className="single">
        <SinglePost />
      </div>
    </>

  )
}
