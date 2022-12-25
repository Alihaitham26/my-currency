import { doc, getDoc, increment, updateDoc } from "firebase/firestore";
import { db } from "./init";

async function sendMoney(senderName,sendedToName,amount){
  if(senderName === sendedToName ) return new Promise(() => {throw Error("you can't send money to yourself")})
  return(
    getDoc(doc(db,"users",sendedToName)).then((doc)=>{
      if(!doc.exists()) throw Error("user not exist")
    }).then(()=>{
      updateDoc(doc(db,"users",senderName),{money: increment( -1 * amount ),spent: increment(amount)})
    }).then(()=>{
      updateDoc(doc(db,"users",sendedToName),{money: increment(amount),received: increment(amount)})
    })
  )
}

export default sendMoney


