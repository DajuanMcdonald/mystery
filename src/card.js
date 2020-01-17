import React from 'react';


const Card = (props) =>  {
    return(
        <div className="card">
            <h1>name: {props.data.name}</h1>
            <p>eye color: {props.data.eye_color}</p>
            <ul>
                {
                    // movies.map(movie => {
                    //     <li>movie: {props.films.length}</li>
                    // })
                }
            </ul>
        </div>
    )
};

export default Card;