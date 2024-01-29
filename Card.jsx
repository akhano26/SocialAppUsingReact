
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import {Postlistcontext} from './Postmakerstore'
const Card=({post})=>{
   const {deletepost}=useContext(Postlistcontext)
  return(
    <div className="card cardcontainer" style={{minWidthd: '30rem'}}>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{cursor:'pointer'}} onClick={()=>deletepost(post.id)}>
    <MdDelete/>
  </span>
    <p className="card-text">{post.detail}</p>
    {post.tags.map((tag,index)=>(
      <span key={index} className="badge text-bg-primary tags">{tag}</span>
    ))}
    <div className="alert alert-success reaction" style={{margin:'10px 0px 0px 0px'}} role="alert">
    This Post have {post.reaction} people reaction
</div>
  </div>
</div>
  )
}
export default Card