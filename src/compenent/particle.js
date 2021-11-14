import React, { Component } from 'react'
 
import ParticleEffectButton from 'react-particle-effect-button'
 
class Particle extends Component {
  state = {
    hidden: false,
    hidden2: false
  }
 
  disppearingEffect = () => {this.setState({hidden: !this.state.hidden});}
  disppearingEffect2 = () => {this.setState({hidden2: !this.state.hidden2});}

  render () {
    return (
      <>
        <div className="main-container">
            <ParticleEffectButton
                hidden={this.state.hidden}
                duration={700}
                easing={'easeInExpo'}
                particlesAmountCoefficient={1}
                oscillationCoefficient={2}
                size={9}
                speed={0.3}
                type="triangle"
                color="red"
            > 
            <div className="main">
                <img src={"./xmas.jpg"} />
            </div>
            </ParticleEffectButton>
           <img src={"./logo192.png"} className="sub"/>        
       </div>
       <div className="main-container2">
            <ParticleEffectButton
                hidden={this.state.hidden2}
                duration={700}
                easing={'easeInExpo'}
                particlesAmountCoefficient={1}
                oscillationCoefficient={1}
                size={4}
                speed={0.3}
                type="circle"
                color="black"
            >
            <div className="main2">
                
                <div>Gift Description</div>
            </div>
            </ParticleEffectButton>
           <div className="sub2">Some Description</div>  
       </div>
       <div className="main-container3">
        <div onClick={this.disppearingEffect}>Toggle Image</div>
        <div onClick={this.disppearingEffect2}>Toggle Description</div>
      </div>
    </>
    )
  }
}

export default Particle
