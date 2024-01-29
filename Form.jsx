
import { useContext, useRef } from "react";
import { GiConfirmed } from "react-icons/gi";
import { Postlistcontext } from "./Postmakerstore";

const Form=()=>{
const {addpost}=useContext(Postlistcontext)
const title=useRef('');
const postbody=useRef('');
const reaction=useRef('');
const tags=useRef();


  const handlesubmit=(event)=>{
    event.preventDefault();
    console.log("Output of Tags",tags.current.value.split(" "))
  const obj={
 title:title.current.value,
 detail:postbody.current.value,
 tags:tags.current.value.split(" "),
 reaction:reaction.current.value,
  }
  addpost(obj)
  }
  return(
    <form onSubmit={(event)=>handlesubmit(event)} className="Form">
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
  <input ref={title}  className="form-control" id="exampleFormControlInput1" placeholder="What is your mind"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Post Body</label>
  <textarea ref={postbody}  placeholder='Write some words about the Post'  className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Reactions</label>
  <input ref={reaction} placeholder=''  className="form-control" id="exampleFormControlTextarea1" rows="3"></input>

</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Tags</label>
  <input ref={tags}  placeholder='Enter tags seperated by Comma'  className="form-control" id="exampleFormControlTextarea1" rows="3"></input>

</div>

<button className="btn btn-primary" type="submit"><GiConfirmed/> Post</button>
</form>
  )
}
export default Form;