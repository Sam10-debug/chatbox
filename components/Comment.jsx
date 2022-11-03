import styles from "../src/styles/Comment.module.css"
import { useData } from '../context/DataContext'
import { nanoid } from 'nanoid'
// import { useData } from "../context/DataContext"


const Comment = () => {	
	const {comment,setComment,post,setPost}=useData()

	const handleChange=(e)=>{
		setComment(prev=>e.target.value)
		console.log(comment)
		
	}
	const handleClick=(e)=>{
		setComment("")
		e.preventDefault()
		setPost (prev=>[...prev,comment])
		console.log(post)
	}
  return (
	<section className={styles.comment}>
		<div className={styles.profile}>
			<img src="/images/avatars/image-maxblagun.png" alt="avatar" />
		</div>
		<form  className={styles.buttonform}>
			<textarea onChange={handleChange}  name="" id="" cols="30" className={styles.textarea} rows="10"></textarea>
			<button onClick={handleClick} className={styles.btn}>SEND</button>
		</form>
	</section>
  )
}

export default Comment