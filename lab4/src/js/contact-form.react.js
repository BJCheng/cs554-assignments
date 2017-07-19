import React from 'react';

export default class ContactForm extends React.Component {
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        let first_name = '',
            last_name = '',
            language = '',
            email = '',
            car = '',
            company = '',
            undergrad = '',
            graduate = '',
            phd = '',
            avatar = '';
        this.state = { first_name, last_name, language, email, car, company, undergrad, graduate, phd, avatar };
    }

    render() {
        return (
            <div>
                <form action="contact" method="POST" onSubmit={this.props.onSubmit}>
                    <h1>Create New Contact</h1>
                    <div className="form-group ">
                        <label htmlFor="first_name">First Name</label>
                        <input id="first_name" name="first_name" className="form-control" placeholder="Enter First Name" aria-describedby="first_name" onChange={this.handleInputChange} value={this.state.first_name} />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="last_name">Last Name</label>
                        <input id="last_name" name="last_name" className="form-control" placeholder="Enter Last Name" aria-describedby="last_name" onChange={this.handleInputChange} value={this.state.last_name} />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" className="form-control" placeholder="Enter Email" aria-describedby="email" onChange={this.handleInputChange} value={this.state.email} />
                    </div>
                    <fieldset className="form-group">
                        <legend>Gender</legend>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input className="form-check-input" type="radio" name="gender" id="genderMale" value="Male" onChange={this.handleInputChange} /> Male
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input className="form-check-input" type="radio" name="gender" id="genderFemale" value="Female" onChange={this.handleInputChange} /> Female
                            </label>
                        </div>
                    </fieldset>
                    <div className="form-group">
                        <label htmlFor="language">Language</label>
                        <input id="language" name="language" className="form-control" placeholder="Language" aria-describedby="language" onChange={this.handleInputChange} value={this.state.language} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="car">Car</label>
                        <input id="car" name="car" className="form-control" placeholder="Car" aria-describedby="car" onChange={this.handleInputChange} value={this.state.car} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="company">Company</label>
                        <input id="company" name="company" className="form-control" placeholder="Company" aria-describedby="company" onChange={this.handleInputChange} value={this.state.company} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="undergrad">Under Graduate</label>
                        <input id="undergrad" name="undergrad" className="form-control" placeholder="Under Graduate" aria-describedby="undergrad" onChange={this.handleInputChange} value={this.state.undergrad} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="graduate">Graduate</label>
                        <input id="graduate" name="graduate" className="form-control" placeholder="Graduate" aria-describedby="graduate" onChange={this.handleInputChange} value={this.state.graduate} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phd">PHD</label>
                        <input id="phd" name="phd" className="form-control" placeholder="PHD" aria-describedby="phd" onChange={this.handleInputChange} value={this.state.phd} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="avatar">Avatar</label>
                        <input id="avatar" name="avatar" className="form-control" placeholder="Avatar" aria-describedby="avatar" onChange={this.handleInputChange} value={this.state.avatar} />
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        );
    }

    handleInputChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        // should be removed if all the value coming from the parent state
        this.setState({
            [name]: value
        });

        this.props.onFormChange({
            [name]: value
        });
    }
}