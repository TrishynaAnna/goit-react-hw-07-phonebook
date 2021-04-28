import React, {Component} from "react";
import style from "../contactForm/ContactForm.module.css";
import {getContactsItems} from "../../../redux/contacts/contactsSelectors";
import {getStatusExist} from "../../../redux/status/statusSelectors";
import {statusExist} from "../../../redux/status/statusActions";
import {addNewContact} from "../../../redux/contacts/contactsOperations";
import { connect } from "react-redux";

class ContactForm extends Component {
    state = {
        name: "",
        number: "",
    };

    handleInputValue = (el) => {
        const inputValue = el.target.dataset.type;
        this.setState({
            [inputValue]: el.target.value,
        });
    };

    handleSubmit = (el) => {
        const { statusExist, addNewContact } = this.props;
        el.preventDefault();
        const contact = {
            name: this.state.name.replace(/\b\w/g, (l) => l.toUpperCase()),
            number: this.state.number,
        };
        if (
            this.props.items.find(
                (element) => element.name.toLowerCase() === contact.name.toLowerCase()
            )
        ) {
            statusExist(true);
            return setTimeout(() => {
                statusExist(false);
            }, 2000);
        } else {
            addNewContact(contact);
        }
        this.setState({
            name: "",
            number: "",
        });
    };

    render() {
        const { name, number} = this.state;
        return (
            <form  onSubmit={this.handleSubmit}>
                <label className={style.label} htmlFor="contactName">Name</label>
                <input
                    className={style.input}
                    id="contactName"
                    type="text"
                    data-type="name"
                    value={name}
                    placeholder="Enter your name"
                    onChange={this.handleInputValue}
                />
                <br />
                <label className={style.label} htmlFor="contactNumber">Number
                    (xxx-xx-xx)</label>
                <input
                    className={style.input}
                    id="contactNumber"
                    type="text"
                    data-type="number"
                    value={number}
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                    placeholder="Enter your phone number in this format"
                    onChange={this.handleInputValue}
                />
                <button className={style.button} variant="outlined" type="submit">
                    Add contact
                </button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: getContactsItems(state),
        exist: getStatusExist(state),
    };
};

const mapDispatchToProps = {
    addNewContact,
    statusExist,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
