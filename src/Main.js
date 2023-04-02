import React,{Component} from "react";
import './Main.css';
import Circle from './Circle';
import Button from './Button'

class Main extends Component {
    state = {
        number:0
}
addFive = () =>{
    this.setState({
       number: this.state.number + 5,
    })
  
}
removeFive = () =>{
    this.setState({
       number: this.state.number - 5,
    })
  
}
reset = () =>{
    this.setState({
       number: 0,
    })
  
}
addOne = () =>{
    this.setState({
       number: this.state.number + 1,
    })
  
}
removeOne = () =>{
    this.setState({
       number: this.state.number - 1,
    })
  
}
render() {

      
    return (
        <main className="main">
        <Circle number = {this.state.number}/>
        <div>
        <Button name = 'ADD 5' click = {this.addFive}/>
        <Button name = 'REMOVE 5' click = {this.removeFive}/>
        <Button name = 'RESET' click = {this.reset}/>
        <Button name = 'ADD 1' click = {this.addOne}/>
        <Button name = 'REMOVE 1' click = {this.removeOne}/>
        </div>
    </main>
    )
        
}

}



export default Main;