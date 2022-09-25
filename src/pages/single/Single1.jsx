import SinglePost1 from "../../components/singlePost/SinglePost1"
import ToBar from "../../components/topbar/ToBar"
import "./Single.css"


export default function single() {
  document.documentElement.scrollTop = document.body.scrollTop =0;
  return (
    <>
      <ToBar />
      <div>
        <img className="headerImg" src={require("../../assets/DSC1504.jpg")} alt="" />
      </div>
      <div className="single">
        <SinglePost1 />
      </div>
    </>

  )
}
