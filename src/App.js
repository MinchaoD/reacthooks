import {useState, useEffect} from 'react';

function App () {
  const [color, setColor] = useState('red');
  const [msg, setMsg] = useState('first message');

  useEffect(() => {
    console.log(msg);
  }, [msg]) // only when msg changes, it will console.log(msg), but it will always run the first time when the site is loaded
  // if there is no [msg], then it will console.log every time when click on any button
  // if change to [msg,color], then it will console.log every time when click on any button, same as if there is no 2nd parameter at all

  useEffect(() => {
    console.log('mount');
  }, [])

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
