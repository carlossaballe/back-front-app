import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

const BACK_URL = 'http://localhost:3001'

function App() {

  const [images, setImages] = useState([]);
  const [texts, setTexts] = useState([]);
  const [selected, setSelected] =useState(0);

  useEffect(() => { 
    
    axios.get(`${BACK_URL}/images`)
    .then(response => { 
      console.log(response.data);
      setImages(response.data) });

    axios.get(`${BACK_URL}/texts`)
    .then(response => {
      console.log(response.data);
      setTexts(response.data);
    });

  }, []); 

  const change = (i) =>{
    setSelected(i);
    console.log(i);
  }

  return (
    <div className='container'>

      <div className='side'>  
        {
          images.length > 0 && images.map((source,i) => <img src={source.img} onClick={()=>change(i)} key={i}></img>)
        }
        
      </div>
      <div className='main-img'>
      {
        images.length > 0 && <img src={images[selected].img}></img>
      }
      {
       texts.length > 0 && <div>{texts[selected].text}</div>
      } 
      </div>

    </div>
  );
}

export default App;
