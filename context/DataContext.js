import {useContext,createContext,useState} from "react"

const Data= createContext()
const {Provider}= Data

const Dataget=({children})=>{
	const [comment,setComment]= useState("")
	const [post,setPost]= useState([])
	
	return(
		<Provider value={{comment,setComment,setPost,post}}>
			{children}
		</Provider>
	)
}

//custom hook
const useData=()=>useContext(Data)
export {useData,Dataget}

