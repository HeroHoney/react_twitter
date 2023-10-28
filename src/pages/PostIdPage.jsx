import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
    const params = useParams()
    const[post,setPost] = useState({})
    const[comments,setComments] = useState([])
    const[fetchPostById, isLoading, error] = useFetching(async (id)=>{
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const[fetchComment, isComLoading, comError] = useFetching(async (id)=>{
        const response = await PostService.getCommentsById(id)
        setComments(response.data)
    })

    useEffect(()=>{
        fetchPostById(params.id)
        fetchComment(params.id)
    },[])

    return(
        <div>
            <div>
                {post.id}. {post.title}
            </div>
            <h1>Comments</h1>
            {comments.map(comm =>
                <div style={{marginTop:"15px"}}>
                    <h5>{comm.email}</h5>
                    <div>{comm.body}</div>
                </div>
            )}
        </div>
    )
}

export default PostIdPage;