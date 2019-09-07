import React from 'react';

const Card = ({ name, email, id }) => {
    return (
    
        <div className="tc bg-light-green dib br3 ma2 grow bw2 shadow-5">
            <h1>Robofriends</h1>
            <img alt ='photo' src={'https://robohash.org/${id}?200x200'}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;