import {useState, useEffect} from 'react';

function ExampleChild() {

  useEffect(() => {
    console.log('Subscribing...');
    return () => {
      console.log('Unsubscribing...')
    };  
  },[])  // if adding {,[]) here, then it will not console.log anything, except if there a condition below for <ExampleChild>
  // there is no ,[], then it will run console.log('subscribing..), then run the console.log('Unsubscribing) after return
  return (
    <h2> I am the example child</h2>
  )
}

function App () {
  const [color, setColor] = useState('red');
  const [msg, setMsg] = useState('first message');

  function changeColor() {  // here we have to use function handleClick(), in the class component we can just use handleClick(), but not for function component
    color === 'red'
    ? setColor ('blue')
    : setColor ('red'); }

  function changeMsg() {
    setMsg ('second message');
  }

  return (
    <div>
       <h1 style = {{ background: color}}> React Hooks</h1>  
        {/* for hooks, we don't need this.state.color, just write color */}
       <h1> {msg} </h1>
      <button onClick={changeColor}>Click me to change color</button>  
      <button onClick={changeMsg}>Click me to change msg</button>  
      {msg === 'first message' && <ExampleChild /> }  
      {/* setup a condition, if msg is first message, then it will return console.log('unsubscribing...'), if no this msg condition, it will console.log nothing */}
     
    </div>
  )

}

export default App


// below code is to use function component with no useEffect, later we use class component, to compare:

// import {useState} from 'react';

// function App () {
//   const [color, setColor] = useState('red');
//   const [msg, setMsg] = useState('');



//   function handleClick() {  
//     ? setColor ('blue')
//     : setColor ('red');
//     setMsg ('second message');
//   }

//   return (
//     <div>
//        <h1 style = {{ background: color}}> React Hooks</h1>  
//       <h1> {msg} </h1>
//       <button onClick={handleClick}>Click me</button>  
  {/* for hooks, we don't need this.handleClick */}
//     </div>
//   )
// }

// export default App



// below code is to use class component for the same result, good to compare:


// import { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       color: 'red',
//       msg: ''
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.state.color === 'red'
//     ? this.setState({color: 'blue'})
//     : this.setState({color: 'red'});
//     this.setState({msg: 'second message'})
//   }

//   render() {
//     return (
//       <div>
//         <h1 style = {{ background: this.state.color}}> React Hooks</h1>
//         <h1> {this.state.msg} </h1>
//         <button onClick={this.handleClick}>Click me</button>
//       </div>
//     )
//   }

// }

// export default App;
