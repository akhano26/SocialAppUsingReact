import { createContext, useReducer } from "react";


const postreducer=(currlist,action)=>{
var newpostlist=[...currlist];
console.log('Before Update: ',newpostlist)
if(action.type==='DELETE_POST'){
newpostlist=currlist.filter((post)=>post.id!=action.payload.postid)
}
else if(action.type==='ADD_POST'){
  console.log("A am object",action.payload.newpost.title)
  newpostlist=[
    ...currlist,{
      id:newpostlist.length+1,
      title:action.payload.newpost.title,
      detail:action.payload.newpost.detail,
      tags:action.payload.newpost.tags,
      reaction:action.payload.newpost.reaction,
    }
  ]
  console.log('After Update: ',newpostlist)

}
return newpostlist;
}
export const Postlistcontext=createContext({postlist:[],addpost:()=>{},deletepost:()=>{}});

const Postmakerprovider=({children})=>{
  const defaultpost=[{
    id:'1',
    title:'Visting Lahore',
    detail:'I am visiting Lahore for the first time, let me know the important thinks to do in here',
    tags:['nervous','excited','doing greates'],
    reaction:2
  },{
    id:'2',
    title:'Graduation in BSCS',
    detail:'I have currently done graduation in BSCS, looking for oppurtunity to deliver my abilities in thes field ',
    tags:['nervous','excited','doing greates'],
    reaction:15
  }]
  const [posts,dispachpost]=useReducer(postreducer, defaultpost);

const addpost=(obj)=>{

dispachpost({
  type:'ADD_POST',
  payload:{
    newpost:obj
  }
})

}
const deletepost=(postid)=>{
dispachpost({
  type:'DELETE_POST',
  payload:{
  postid:postid,},
})
}

  return(
<Postlistcontext.Provider value={{posts,addpost,deletepost}}>
{children}
</Postlistcontext.Provider>
  )
}
export default Postmakerprovider