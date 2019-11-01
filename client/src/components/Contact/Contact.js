import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const initialState = {
    contactName: "",
        contactEmail: "",
        nameError: "",
        emailError: ""
}

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    ///sets state
  state = initialState;




    validate = () => {
        let nameError = "";
        let emailError = "";

        if (!this.state.contactName) {
            nameError = "Name can't be blank";
        }

        if (!this.state.contactEmail.includes('@')) {
            emailError = 'invalid email';
        }

        if (emailError || nameError) {
            this.setState({ emailError, nameError});
            return false;
        }

        return true;
    }


    //gives the database the submitted data
    handleSubmit(event) {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            //clears the form
            this.setState(initialState);
        }
        
        fetch('http://localhost:3002/api/contacts', {
            method: 'POST',
            body: JSON.stringify({
                contactName: this.state.contactName,
                contactEmail: this.state.contactEmail
            })
        }).then(res => res.join())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    };

    ///actual input forms
    render() {
        return (
<>
             <Navbar />
            
            <form action="https://formspree.io/mlejohn21@gmail.com" className="wholeInput">
                <div class="container-form">
                    <div class="form-group">
                        <label for="exampleInputEmail1" value={this.state.contactName}>Name</label>
                        <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" required/>
                        <small id="emailHelp" class="form-text text-muted">Don't leave this blank.</small>
                    </div>

                    {/* error message name */}

                    <div style={{ color: 'red' }}>
                        {this.state.nameError}
                    </div>



                    <div class="form-group">
                        <label for="exampleInputEmail1" value={this.state.contactEmail}>Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    {/* error messgae email */}
                    <div style={{ color: 'red' }}>
                        {this.state.emailError}
                    </div>


                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">I am already an existing user</label>
                    </div>
                    <button onClick='cart.html' type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
            <Footer />
    </>
        );

    }
}


export default Contact;