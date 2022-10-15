import SinglePost5 from "../../components/singlePost/SinglePost5"
import ToBar from "../../components/topbar/ToBar"
import "./Single.css"


export default function single() {
  document.documentElement.scrollTop = document.body.scrollTop =0;
  return (
    <>
      <ToBar />
      <div>
        <img className="headerImg" src={require("../../assets/pexels-anton-h-145707.jpg")} alt="" />
      </div>
      <div className="single">
        <SinglePost5 />
      </div>
    </>

  )
}

