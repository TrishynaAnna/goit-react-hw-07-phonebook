import React, {Component} from "react";
import ContactList from "./contacts/contactsList/ContactsList";
import ContactForm from "./contacts/contactForm/СontactForm";
import FindContact from "./contacts/findContact/FindContact";
import style from "./Phonebook.module.css";
import { connect } from "react-redux";
import {getContactsItems} from "../redux/contacts/contactsSelectors";
import {getStatusIson} from "../redux/status/statusSelectors";
import {getItem} from "../redux/contacts/contactsOperations";
import {statusInOn} from "../redux/status/statusActions";

class Phonebook extends Component {
    componentDidMount() {
        this.props.getItem();
    }

    render() {
        this.props.statusInOn(true);
        return (
                <div className={style.container}>
                    <h1>Phonebook</h1>
                    <ContactForm />
                        <FindContact />
                    <ContactList />
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: getContactsItems(state),
        inOn: getStatusIson(state),
    };
};

const mapDispatchToProps = {
    getItem,
    statusInOn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
