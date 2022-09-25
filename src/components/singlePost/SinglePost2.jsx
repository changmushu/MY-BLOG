import "./SinglePost.css"

export default function SinglePost() {
    return (
        <div>
            
            
            <div className="singlePost">
                <h1 className="singlePostTitle">
                【自由,无拘无束】四月花丛
                </h1>
                <h2 className="singlePostTitleline">———</h2>

                <p className="singlePostDesc">蒲公英的花语为自由,无拘无束。
                </p>
                <div className="singlePostWrapper">
                    <img className="singlePostImg" src={require("../../assets/mmexport1655040936329.jpg")} alt="" />
                </div>
                <div className="singlePostWrapper">
                    <img className="singlePostImg" src={require("../../assets/mmexport1655040942170.jpg")} alt="" />
                </div>
                <p className="singlePostDesc">五月，哈尔滨的花开的格外的晚。
                </p>
                <div className="singlePostWrapper">
                    <img className="singlePostImg" src={require("../../assets/000005.jpg")} alt="" />
                </div>
                <p className="singlePostDesc">单个的物体。
                </p>
                <div className="singlePostWrapper">
                    <img className="singlePostImgTwo" src={require("../../assets/000002.jpg")} alt="" />
                    <img className="singlePostImgTwo" src={require("../../assets/000004.jpg")} alt="" />
                </div>
                <div className="singlePostWrapper">
                    <img className="singlePostImg" src={require("../../assets/000003.jpg")} alt="" />
                </div>
                <p className="singlePostDesc">看不清的月亮。
                </p>
                <div className="singlePostWrapper">
                    <img className="singlePostImg" src={require("../../assets/000028.jpg")} alt="" />
                </div>
                <h2 className="singlePostTitlelineunder">——</h2>

            </div>
        </div>

    )
}
