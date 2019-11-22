import React from 'react'
import httpClient from '../../httpClient';

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
	state = {
		fields: { name: '', username: '', password: '' }
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
		httpClient.signUp(this.state.fields).then(user => {
			this.setState({ fields: { name: '', username: '', password: '' } })
			if (user) {
				this.props.onSignUpSuccess(user)
				this.props.history.push('/')
			}
		})
	}

	render() {
		const { name, username, password } = this.state.fields
		return (

<>
			<h1 className="log-in">Sign Up</h1>
			<div className='login-container'>
			<div className='LogIn'>
				<div className='wholeInput'>
					<div className='column column-33 column-offset-33'>
						<form className="wholeInput" onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
							<input className="form-control" type="text" placeholder="Name" name="name" value={name} />
							<input className="form-control" type="text" placeholder="Username" name="username" value={username} />
							<input className="form-control" type="password" placeholder="Password" name="password" value={password} />
							<button>Sign Up</button>
						</form>
					</div>
				</div>
				</div>
			</div>
			</>
		)
	}
}

export default SignUp