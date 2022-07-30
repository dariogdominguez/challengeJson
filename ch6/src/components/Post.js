import React from "react";

export default function Post ({ title, content }){
    return (
        <div>
            <fieldset>
                <h3>{title}</h3>
                <p>{content}</p>
            </fieldset>
        </div>
    )
}
