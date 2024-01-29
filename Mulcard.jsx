import Card from "./Card";
import { useContext } from "react";
import { Postlistcontext } from "./Postmakerstore";

const Mulcard=()=>{
const {posts}=useContext(Postlistcontext);
return(
  <>
  {posts.map((post)=>(
    <Card key={post.id} post={post}/>
  ))
 
  }
  </>
)
}
export default Mulcard;