import logo from './logo.svg';
import './App.css';
import React from 'react';


function ShowBanner(props) {
  if (props.time > 45) {
    return (
      <div className="rest_block">Отдых</div>
    )
  } else {
    return (
      <div className="work_block">Время работать над собой</div>
    )
  }
}

// 1) Когда React рендерит DOM-Структуру, он создаёт новый экземпляр clock и в нём сразу инициализируется положение с датой

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }
  }

  // 3) Когда таймер появляется на странице и наш таймер говорит браузеру реализовать метод tick каждую секунду

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    )
  }

  // 5) Как только таймер исчезает со страницы вызывается метод componentWillUnmount, который очистит наш интервал

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  // 4) Когда вызывается данный метод, наше положение с датой обновляется(У меня setState есть ещё одна особенность: Если положение изменилось, он вызовет метод render для обновления элемента на странице) P.S. render сам помнит какую часть элемента на странице нужно обновлять каждую секунду

  tick() {
    this.setState({
      date: new Date()
    })
  }

  // 2) Происходит вызов метода render и таймер появляется на странице с текущем временем

  render() {
    return (
      <div>
        <ShowBanner time={this.state.date.getSeconds()} />
        <h1>Текущее время {this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default Clock;
