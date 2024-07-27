import React, { useEffect, useState } from 'react'
import authService from '../appWrite/authService';
import databaseService from '../appWrite/databaseService';
import {Container, PostCard} from "../components/index"

function AllPosts() {

    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        databaseService.getALLPosts([]).then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts