import React, {Component} from 'react';
import update from 'immutability-helper';

//styles
import './App.scss';
import MoneyItem from "./Components/MoneyItem";

class App extends Component {
  state = {
    money: [{
      title: '1 centime',
      centEuro: 'cent',
      amount: 0,
      value: 0.01
    }, {
      title: '2 centimes',
      centEuro: 'cent',
      amount: 0,
      value: 0.02
    }, {
      title: '5 centimes',
      centEuro: 'cent',
      amount: 0,
      value: 0.05
    }, {
      title: '10 centimes',
      centEuro: 'cent',
      amount: 0,
      value: 0.10
    }, {
      title: '20 centimes',
      centEuro: 'cent',
      amount: 0,
      value: 0.20
    }, {
      title: '50 centimes',
      centEuro: 'cent',
      amount: 0,
      value: 0.5
    }, {
      title: '1 euro',
      centEuro: 'euro',
      amount: 0,
      value: 1
    }, {
      title: '2 euros',
      centEuro: 'euro',
      amount: 0,
      value: 2
    }, {
      title: '5 euros',
      centEuro: 'euro',
      amount: 0,
      value: 5,
      type: 'square',
    }, {
      title: '10 euros',
      centEuro: 'euro',
      amount: 0,
      value: 10,
      type: 'square',
    }, {
      title: '20 euros',
      centEuro: 'euro',
      amount: 0,
      value: 20,
      type: 'square',
    }, {
      title: '50 euros',
      centEuro: 'euro',
      amount: 0,
      value: 50,
      type: 'square',
    }, {
      title: '100 euros',
      centEuro: 'euro',
      amount: 0,
      value: 100,
      type: 'square',
    }, {
      title: '200 euros',
      centEuro: 'euro',
      amount: 0,
      value: 200,
      type: 'square',
    }, {
      title: '500 euros',
      centEuro: 'euro',
      amount: 0,
      value: 500,
      type: 'square',
    }]
  };

  onEdit = (item, value) => {

    console.log(this.state.money.indexOf(item));

    const test = update(this.state, {
      money: {
        [this.state.money.indexOf(item)]: {
          amount: {
            $set: value
          }
        }
      }
    });

    this.setState(test);
  };


  render() {

    const total = this.state.money.reduce((total, item) => {
      console.log('item', item);
      return total + parseInt(item.amount, 10) * item.value
    }, 0);
    return (
      <div className="container">
        <div className="total">{total.toFixed(2)} €</div>
        <div className="money-list">
          {this.state.money.map(item => (
            <MoneyItem
              key={item.title}
              item={item}
              onEdit={this.onEdit}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
