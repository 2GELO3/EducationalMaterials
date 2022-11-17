import React from 'react';
// import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/';

// class WhoAmI extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     years: 26
  //   }
  //   // 1 способ
  //   // this.nextYear = this.nextYear.bind(this);

  //   // 2 способ
  //   // this.nextYear = () => {
  //   //   this.setState(state => ({
  //   //     years: ++state.years
  //   //   }))
  //   // }
  // }

  // Состояние возможно использовать даже без конструктора
  // state = {
  //   years: 26
  // }

  // 3 способ
  // nextYear = () => {
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // }

  // 1 способ
  // nextYear() {
    // this.setState(state => ({
    //   years: ++state.years
    // }))
  // }

//   render() {
//     const {name, surname, link} = this.props;
//     const {years} = this.state;
//     return (
//       <>
//         <button onClick={this.nextYear}>++</button>
//         <h1>My name is {name}, surname - {surname}, years = {years}</h1>
//         <a href={link}>My profile</a>
//       </>
//     )
//   }
// }

// const All = () => {
//     return (
//       <>
//         <WhoAmI name="John" surname="Smith" link="facebook.com"/>
//         <WhoAmI name="Ivan" surname="Smith" link="vk.com"/>
//         <WhoAmI name="Alex" surname="Shepard" link="instagram.com"/>
//       </>
//     )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <WhoAmI name="Oleg" surname="Vasilevsky" link="https://www.youtube.com/watch?v=243pQXC5Ebs"/> */}
    {/* <All/> */}
  </React.StrictMode>
);


