import React from "react";
import MyButton from "./UI/button/MyButton";
import { useHistory } from 'react-router-dom';

const PostItem = (props) => {
    const router = useHistory()
    return(
        <div className="PostItem">
            <div className='post'>
                <div className='postContent'>
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>{props.post.body}</div>
                </div>
                <div className='postBtn'>
                    <MyButton onClick={()=>router.push(`/posts/${props.post.id}`)}>open</MyButton>
                    <MyButton onClick={()=>props.remove(props.post)}>delete</MyButton>
                </div>
            </div>
        </div>
    )
}

export default PostItem