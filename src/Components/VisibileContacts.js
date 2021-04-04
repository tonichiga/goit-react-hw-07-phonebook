import { Component } from 'react';
import ContactElement from './VisibileContacts/';
import s from './VisibileContacts.module.scss';
import PropTypes from 'prop-types';

class VisibileContacts extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        number: PropTypes.string,
        id: PropTypes.number,
      }),
    ).isRequired,
  };

  state = {
    filter: '',
  };

  findContact = () => {
    const contacts = this.props.data;

    const filtered = contacts.filter(
      contact => contact.name === this.state.filter,
    );
    return filtered;
  };

  handleContactFinder = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const findContacts = this.findContact();

    return (
      <>
        <h2>Contacts</h2>
        <p>Find contact</p>
        <input
          type="text"
          placeholder="enter name"
          onChange={this.handleContactFinder}
          value={this.state.filter}
        ></input>
        <p>{findContacts.map(({ name }) => name)}</p>
        <ul className={s.list}>
          {this.props.data.map(data => (
            <ContactElement
              name={data.name}
              number={data.number}
              key={data.id}
              deleteContact={this.props.delete}
              id={data.id}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default VisibileContacts;
