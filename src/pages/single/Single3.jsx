import SinglePost3 from "../../components/singlePost/SinglePost3"
import ToBar from "../../components/topbar/ToBar"
import "./Single.css"


export default function single() {
  document.documentElement.scrollTop = document.body.scrollTop =0;
  return (
    <>
      <ToBar />
      <div>
        <img className="headerImg" src={require("../../assets/000046.jpg")} alt="" />
      </div>
      <div className="single">
        <SinglePost3 />
      </div>
    </>

  )
}

