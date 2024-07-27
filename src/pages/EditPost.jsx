import React, { useEffect, useState } from 'react'
import {Container, PostForm} from '../components/index'
import { useNavigate, useParams } from 'react-router-dom';
import databaseService from '../appWrite/databaseService';
function EditPost() {
    const [post, setPost]  = useState();
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        if(slug){
            databaseService.getSinglePost(slug).then((post)=>{
                setPost(post)
            })
        }else{
            navigate("/")
        }
  
    },[slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost