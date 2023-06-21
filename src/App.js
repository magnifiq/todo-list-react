import React, {useState, useEffect} from 'react';
import './App.css';
import ContactCard from './Components/ContactCard';

const App=()=> {
  const contacts=[
    {
      avatarUrl: "https://via.placeholder.com/150",
      name: "Sawa Das",
      email: "das@gmail.com",
      age: 23
    },
    {
      avatarUrl: "https://via.placeholder.com/150",
      name: "Noito Dyti",
      email: "dyti@gmail.com",
      age: 45
    },
    {
      avatarUrl: "https://via.placeholder.com/150",
      name: "Monto Sawe",
      email: "sawe@gmail.com",
      age: 89
    }

];

  const [results, setResults]=useState([]);
  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=12") // change number of results(results=n)
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      setResults(data.results);
    });
  }, []);
  
 
  return(
    <div>
      {results.map((result, index)=>{
        return (
          <ContactCard key={index} avatarUrl={result.picture.large} name={result.name.first} email={result.email} age={result.dob.age}/>
        );
        }
      )
    }
    </div>);
};
   

export default App;
