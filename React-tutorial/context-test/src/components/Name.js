import React, {Component} from 'react';
import MyContext from './Context';

// Передача контекста в функциональном компоненте
// const Name = () => {
//   return (
//     <MyContext.Consumer>
//       {
//         (value) => {
//           <div className="name">
//           My name is {value}
//           </div>
//         }
//       }
//     </MyContext.Consumer>
//   )
// }

// Передача контекста в классовом компоненте
class Name extends Component {
  render() {
    return (
      <div className="name">
      My name is {this.context.name}, age {this.context.age}
      </div>
    )
  }
}

Name.contextType = MyContext;

export default Name;