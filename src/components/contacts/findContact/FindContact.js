import React from "react";
import style from "./FindContact.module.css";
import {getFilterValue} from "../../../redux/contacts/contactsAction";
import { connect } from "react-redux";

const FindContact = ({ getFilterValue }) => {
    return (
        <div className={style.filter}>
            <label className={style.label} htmlFor="findContact">Enter a name to search</label>
            <input className={style.input} id="findContact" type="text" onChange={getFilterValue} />
        </div>
    );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
    getFilterValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(FindContact);
