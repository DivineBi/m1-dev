import React from 'react';

function Article({titre,paragraph,image}){

    return(
        <article>
            <h2>{titre}</h2>
            <p>{paragraph}</p>
            <img src={image} alt="test"/>
        </article>

    );
}

export default Article;