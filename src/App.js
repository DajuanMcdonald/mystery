import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Card from "./Card";

//
// function App() {
//   const [data, setData] = useState([]);
//
//
//       useEffect(() => {
//           axios.get('https://swapi.co/api/people/1')
//           .then(
//             console.log(res.data.results)
//           )
//       }, [])
//
//   return (
//     <div className="App">
//     </div>
// );
// }
//
// export default App;

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.co/api/people/1')
            .then(res => {
                setData(res.data);
                // console.log(res.data)
            })
    }, []);



    return (
        <div className='App'>
            {

            <Card data={data} />
            }

        </div>



    )
}

export default App;
