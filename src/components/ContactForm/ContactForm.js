import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  stateReset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onFormSubmit(this.state);

    this.stateReset();
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label htmlFor="form-name">Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id="form-name"
          onChange={this.handleChange}
          value={this.state.name}
          required
        />
        <label htmlFor="form-number">Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id="form-number"
          onChange={this.handleChange}
          value={this.state.number}
          required
        />
        <button type="submit" className={css.form__button}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
