class Login extends React.Component{
	render() {
		return(
			<div className="login">
		<div className="login-screen">
			<div className="app-title">
				<h1>Login</h1>
			</div>

			<div className="login-form">
				<div className="control-group">
				<input type="text" className="login-field" value="" placeholder="username" id="login-name"/>
				<label className="login-field-icon fui-user" htmlFor="login-name"></label>
				</div>

				<div className="control-group">
				<input type="password" className="login-field" value="" placeholder="password" id="login-pass"/>
				<label className="login-field-icon fui-lock" htmlFor="login-pass"></label>
				</div>

				<a className="btn btn-primary btn-large btn-block" href="#">login</a>
			</div>
		</div>
	</div>
			);
	}
}

ReactDOM.render(<Login />, document.getElementById('root'));