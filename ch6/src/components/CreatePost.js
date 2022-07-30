import React from "react";
export default function CreatePost ({ postTitle, postContent, savePost }){
    return (
        <div>
            <h1>Create a new story</h1>
            <form onSubmit={savePost}>
                <fieldset>
                    <legend>Login:</legend>
                    <label htmlFor="postTittle">Post tittle: </label>
                    <input type="text" required id="postTittle" name="postTittle" placeholder="post tittle" onChange={postTitle}/><br></br>
                    <label htmlFor="story">Post: </label>
                    <textarea type="story" required id="story" name="story" placeholder="Write new story" onChange={postContent}/><br></br>
                    <input type="submit" value="Submit"/>
                </fieldset>
            </form>
        </div>
    )
}
