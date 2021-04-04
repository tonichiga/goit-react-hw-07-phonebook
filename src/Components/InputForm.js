import s from './ButtonAddContact.module.scss';
import { Component } from 'react';
import { connect } from 'react-redux';
import action from '../redux/contacts/contacts-action';
import axiosAddContact from '../redux/contacts/contacts-operation';

class InputForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  hanldesubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      name: this.state.name,
      number: this.state.number,
      // id: 111,
    });
    this.reset();
  };

  render() {
    return (
      <form onSubmit={this.hanldesubmit}>
        <p>Name</p>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
          name="name"
        ></input>

        <p>Number</p>

        <input
          type="number"
          onChange={this.handleChange}
          value={this.state.number}
          name="number"
        ></input>

        <button type="submit" className={s.addButton}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(axiosAddContact.addTodo(contact)),
});

export default connect(null, mapDispatchToProps)(InputForm);
