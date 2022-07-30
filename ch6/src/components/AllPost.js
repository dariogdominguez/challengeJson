import React, { useState } from "react";
import Post from "./Post";
import CreatePost from "./CreatePost";
import { BodyWrapper, ContentWrapper } from "../styles/bodyStyles"



export default function AllPost (){

    const [isCreated, setIsCreated] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [allPost, setAllPost] = useState([]);

    const postTitle = e =>{
        setTitle(e.target.value);
    }
    const postContent = e =>{
        setContent(e.target.value);
    }

    const savePost = e => {
        e.preventDefault();
        const id = Date.now();
        setAllPost ([...allPost, { id, title, content }]);
        setTitle("");
        setContent("");
        onCreate();
    }

    const onCreate = () => {
        setIsCreated(!isCreated);
    }

    if (isCreated) {
        return (
            <BodyWrapper>
                <ContentWrapper>
                <CreatePost postTitle={postTitle} 
                            postContent={postContent}
                            savePost={savePost}
                />
                </ContentWrapper>
            </BodyWrapper>
        )
    } else {
        return (
            <BodyWrapper>
                <ContentWrapper>
                <h2>Todos las Historias</h2>
                {allPost.map(p => (
                    <Post key={p.id}
                        id={p.id}  
                        title={p.title}
                        content={p.content} 
                    />
                ))}
                <button onClick={onCreate}>Agregar una historia</button>
                </ContentWrapper>
            </BodyWrapper>
        )
    }

    
}