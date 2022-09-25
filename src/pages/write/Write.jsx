import "./Write.css"

export default function write() {
  return (
    <div className="write">
        <img className="writeImg" src={require("../../assets/write.jpg")} alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{ display:"none" }}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" className="writeInput WriteText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
