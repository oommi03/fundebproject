import React from 'react';
import './card-formstyles.css';

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card_hol: '',
      card_num: '',
      card_cvv: '',
      card_exp: ''
    }
  }

  onSubmit = () => {
    console.log(this.state);
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <form className="card-form">
        <input
          type="text"
          name="card_hol"
          value={this.state.card_hol}
          placeHolder="Card Holder"
          onChange={this.onChange}
        />
        <input
          type="number"
          name="card_num"
          value={this.state.card_num}
          placeHolder="Card Number"
          onChange={this.onChange}
        />
        <input
          type="number"
          name="card_cvv"
          value={this.state.card_cvv}
          maxLength={4}
          placeHolder="Card CVV"
          onChange={this.onChange}
        />
        <input
          type="text"
          name="card_exp"
          value={this.state.card_exp}
          maxLength={5}
          placeHolder="(MM/YY)"
          onChange={this.onChange}
        />
        <button className="card-submit" type="button" onClick={this.onSubmit}>Submit</button>
      </form>
    );
  }
}

export default CardForm 