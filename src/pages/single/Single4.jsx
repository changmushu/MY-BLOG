import SinglePost4 from "../../components/singlePost/SinglePost4"
import ToBar from "../../components/topbar/ToBar"
import "./Single.css"


export default function single() {
  document.documentElement.scrollTop = document.body.scrollTop =0;
  return (
    <>
      <ToBar />
      <div>
        <img className="headerImg" src={require("../../assets/pexels-sami-2864230.jpg")} alt="" />
      </div>
      <div className="single">
        <SinglePost4 />
      </div>
    </>

  )
}

