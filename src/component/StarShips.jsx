import React,{useEffect,useState} from 'react'
import axios from 'axios'
const StarShips = () => {
    const [results,setResults] = useState([]);
    const [page,setPage] = useState(1);
    useEffect(()=>{
        getStarPlanet();
    },[page])

    const getStarPlanet = async ()=>{
        const response = await axios.get(`https://swapi.dev/api/starships/?page=${page}`);
        if(response.status===200){
            setResults(response.data.results);
        }
        else{
            alert("Not Hitted");
        }
    }
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Names</th>
            </tr>
        </thead>
        {results.map((result)=>{
            return(
                <tbody>
                    <tr>
                        <td>{result.name}</td>
                    </tr>
                </tbody>
            )
        }
        )}
      </table>
      <button onClick={()=>setPage(page+1)}>Next</button>
      <button onClick={()=>setPage(page-1)}>prev</button>
    </div>
  )
}

export default StarShips
