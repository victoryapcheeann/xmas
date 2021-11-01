import React, { useState, forwardRef } from 'react'
import shuffle from 'lodash.shuffle'
import './App.css'
import FlipMove from 'react-flip-move';

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

  const FunctionalArticle = forwardRef((props, ref) => {    
    return(
      <div ref={ref} className="container">
        Person ID: {props.id} <br/>
        Name:{props.name}  
      </div>
    )
  });
  
  return (
    <>
      <button onClick={shuffleList}> shuffle</button>
      <button onClick={shuffleList2}> shuffle2</button>

      <input type="text" placeholder="ID to swap from" onChange={e => setCurrentFromID(e.target.value)} />
      <input type="text" placeholder="ID to swap to" onChange={e => setCurrentToID(e.target.value)} />
      <button onClick={submitValue}>Swap</button>
      
      <div className="list">
        {output.map(d => {
          return(
            <div>
              <div>Gift ID: {d.data1.id}</div> 
              <div>Gift Name:{d.data1.name}</div> 
              <FlipMove>
                <FunctionalArticle key={d.data2.id} {...d.data2} />
              </FlipMove>
            </div>
          )
        })}
      </div>
    </>
  )
}

