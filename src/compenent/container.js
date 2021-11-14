import React, { useState, forwardRef } from 'react'
import FlipMove from 'react-flip-move';
import Particle from './particle'

export default function Container(props) {  
  const FunctionalArticle = forwardRef((props, ref) => {    
    return(
        <div ref={ref} className="container">
            Person ID: {props.id} <br/>
            Name:{props.name}  
        </div>
    )
  });

  return (
            <div>
              {/* <div>Gift ID: {props.data.data1.id}</div> 
              <div>Gift Name:{props.data.data1.name}</div>  */}
              <FlipMove>
                <FunctionalArticle key={props.data.data2.id} {...props.data.data2} />
              </FlipMove>
              <Particle/>
             
            </div>
          )
}

