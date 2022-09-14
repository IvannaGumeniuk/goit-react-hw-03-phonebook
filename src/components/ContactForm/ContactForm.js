import React, { Component } from "react";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { name, number } = this.state;
        const newContact = {name, number, id: String(nanoid(5)),};
            if (this.props.checkNewContact(newContact)) {
                return;
            }
        this.props.onSubmit(newContact);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };
    
    render() {
        const { name, number } = this.state;
        return (
                <form className={styles.form} onSubmit={this.onSubmit}>
                    <label className={styles.name}> Name   
                        <input className={styles.input}
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>
                    <br></br>
                    <label className={styles.name}> Number  
                        <input className={styles.input}
                            type="tel"
                            name="number"
                            value={number}
                            onChange={this.handleChange}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />         
                    </label>
                <br></br>
                <button type="submit"> Add contact </button>
                </form>
        )
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    checkNewContact: PropTypes.func.isRequired,
}

export default ContactForm;