import React, {useEffect, useState} from 'react';
import axios from 'axios';


const Card = (props) =>  {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.co/api/films/')
            .then( (res) => {
                setMovies(res.data.results);
                console.log(res.data.results)
            })
            .catch(err => console.error(err))
    }, []);

    return(
        <div className="card">
            <h1>Name: {props.data.name}</h1>
            <h3>Eye Color: {props.data.eye_color}</h3>
             <h1>Movies: </h1>
            <div>

            <ul>
                {
                    movies.map(movie => {
                        return (

                            <li>{movie.title}</li>

                            )

                    })
                }
            </ul>
            </div>
        </div>
    )
};

export default Card;