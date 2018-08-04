import React, {Component} from 'react';
import "./MoneyItem.scss";

class MoneyItem extends Component {
  render() {
    const {centEuro} = this.props.item;
    let value = this.props.item.value;

    if(centEuro === 'cent') {
      value = this.props.item.value * 100;
    }

    return (
      <div class="money-item">
        <div className={`money-pict money-${centEuro}${value} item-value ${this.props.item.type || 'disc'}`}></div>
        <div>
          <input
            type="number"
            value={this.props.item.amount}
            onChange={(e) => this.props.onEdit(this.props.item, e.target.value)}
          />
        </div>
      </div>
    );
  }
}

export default MoneyItem;
