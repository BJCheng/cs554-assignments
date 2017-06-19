import React from 'react';
import Contact from './contact.react.js';
import $ from '../../node_modules/jquery/dist/jquery.min.js';
import ContactForm from './contact-form.react';

class Contacts extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    componentDidMount() {
        $.ajax({
            url: '/data',
            success: function (data) {
                this.setState({
                    contactList: data
                });
            }.bind(this)
        });
    }

    render() {
        if (this.state.contactList) {
            let contactList = this.state.contactList.map((contact) => {
                return <Contact key={contact.id} data={contact} />
            });
            return (
            <div className="row px-5 py-4">
                <div className="col-sm-12 col-md-3 border-top-1">
                    <ContactForm onFormChange={this.handleFormChange} onSubmit={this.handleSubmit}/>
                </div>
                <div className="col-sm-12 col-md-9">
                    <div className="row">{contactList}</div>
                </div>
            </div>);
        } else {
            return <div>fetching...</div>
        }
    }

    handleFormChange(obj){
        this.setState(obj);
    }

    handleSubmit(e){
        e.preventDefault();
        let formData = this.state;
        delete formData.contactList;
        $.ajax({
            url: 'contact', 
            method: 'POST', 
            data: formData, 
            dataType: 'json',
            success: function(data){
                this.setState({contactList: data});
                alert('Please scroll to the bottom to see the new contact has been made.');
            }.bind(this)
        });
    }


}

export default Contacts;