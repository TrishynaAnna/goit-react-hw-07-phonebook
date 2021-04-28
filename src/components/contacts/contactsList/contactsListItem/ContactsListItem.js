import React from "react";
import PropTypes from "prop-types";
import style from "./ContactListItem.module.css";

const ContactListItem = ({ contact, removeItem }) => {
    return (
        <li data-id={contact.id} className={style.contactListItem}>
            <h4 className={style.contactListItemHeadline}>{contact.name}</h4>
            <h4 className={style.contactListItemHeadline}>{contact.number}</h4>
            <button type="button" id={contact.id} onClick={() => removeItem(contact.id)} className={style.button}>
                delete
            </button>
        </li>
    );
};

export default ContactListItem;

ContactListItem.propTypes = {
    contact: PropTypes.object,
};
