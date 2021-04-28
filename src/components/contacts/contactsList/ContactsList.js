import React from "react";
import ContactListItem from "./contactsListItem/ContactsListItem";
import {getContactsFilter, getContactsItems} from "../../../redux/contacts/contactsSelectors";
import {removeItem} from "../../../redux/contacts/contactsOperations";
import { connect } from "react-redux";

function filteredContact(items, filter) {
    if (filter.length !== 0) {
        return items.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    } else {
        return items;
    }
}

const ContactList = ({ items, filter = "", removeItem }) => {
    const contacts = filteredContact(items, filter);
    return (
        <ul >
            {contacts.map((contact) => (
                    <ContactListItem
                        removeItem={removeItem}
                        contact={contact}
                        key={contact.id}
                    />
            ))}
        </ul>
    );
};

const mapStateToProps = (state) => {
    return {
        items: getContactsItems(state),
        filter: getContactsFilter(state),
    };
};

const mapDispatchToProps = {
    removeItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
