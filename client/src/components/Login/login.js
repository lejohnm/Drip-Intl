import React from 'react'
import httpClient from '../../httpClient'

class LogIn extends React.Component {
    state = {
        fields: { username: '', password: '' }
    }

    onInputChange(evt) {
        this.setState({
            fields: {
                ...this.state.fields,
                [evt.target.name]: evt.target.value
            }
        })
    }

    onFormSubmit(evt) {
        evt.preventDefault()
        httpClient.logIn(this.state.fields).then(user => {
            this.setState({ fields: { username: '', password: '' } })
            if (user) {
                this.props.onLoginSuccess(user)
                this.props.history.push('/')
            }
        })
    }

    render() {
        const { username, password } = this.state.fields
        return (
            <>
                <h1 className="log-in">Log In</h1>
                <div className='login-container'>

                    <div className='LogIn'>
                        <form className="wholeInput" onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                            <div className="form-box">
                            <input className="form-control" id="exampleInputEmail1" type="text" placeholder="Username" name="username" value={username} required />
                            </div>
                            <div className="form-box">
                            <input className="form-control" type="password" placeholder="Password" name="password" value={password} />
                            </div>
                            <button>Log In</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default LogIn