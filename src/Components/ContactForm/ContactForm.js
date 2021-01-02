import { Component } from 'react';
import propTypes from 'prop-types';

import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div className={s.formContainer}>
        <h2 className={s.formTitle}>Phonebook</h2>
        <form onSubmit={this.handleSubmit} className={s.form}>
          <label className={s.formLabel}>
            Name
            <input
              className={s.formInput}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </label>
          <label className={s.formLabel}>
            Number
            <input
              className={s.formInput}
              type="number"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            ></input>
          </label>
          <button type="submit" className={s.formButton}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};

export default ContactForm;
