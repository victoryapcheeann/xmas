import React, { useState } from 'react'
import shuffle from 'lodash.shuffle'
import './App.css'
import Container from './compenent/container';
import Snow from './compenent/snow';
import Neon from './compenent/neon';

export default function App() {
  const [data, setData] = useState([{id:1, name:'1a'},{id:2, name:'1b'},{id:3, name:'1d'},{id:4, name:'1g'},{id:5, name:'1g'},{id:6, name:'1g'}])
  const [data2, setData2] = useState([{id:7, name:'2a'},{id:8, name: '2b'},{id:9, name:'2d'},{id:10, name:'2g'},{id:11, name:'3s'},{id:12, name:'5g'}])
  let output = data.map((data1,i) => ({data1, data2: data2[i]}));

  const shuffleList = () => setData(shuffle(data))
  const shuffleList2 = () => setData2(shuffle(data2))
  
  const [currentFromID, setCurrentFromID] = useState('');
  const [currentToID, setCurrentToID] = useState('');

  function submitValue() {
    if (currentFromID !='' && currentToID != '') { 
       let fromIndex = data2.findIndex(function(obj){return obj.id == currentFromID})
       let toIndex = data2.findIndex(function(obj){return obj.id == currentToID})
       if (fromIndex >= 0 && toIndex >= 0) {
          let originalData = [...data2];

          let temp = originalData[fromIndex];
          originalData[fromIndex] = originalData[toIndex];
          originalData[toIndex] = temp;
          
          console.log(originalData)
          setData2(originalData)

          console.log(fromIndex, 'index', toIndex)
          console.log(currentFromID, 'swap-to-id', currentToID)
       } else {
          console.log('invalid id')
       }
    } else {
       console.log('please enter id')
    }
  }


  
  return (
    <>
      <Snow/>
      {/* <button onClick={shuffleList}> shuffle</button>
      <button onClick={shuffleList2}> shuffle2</button> */}
      <div className="header">
        <Neon className="neon"/>
        <input type="text" placeholder="ID to swap from" onChange={e => setCurrentFromID(e.target.value)} />
        <input type="text" placeholder="ID to swap to" onChange={e => setCurrentToID(e.target.value)} />
        <button onClick={submitValue}>Swap</button>
      </div>
      <div className="list">
        {output.map(d => {
          return(
            <Container data={d}></Container>
          )
        })}
      </div>
    </>
  )
}

