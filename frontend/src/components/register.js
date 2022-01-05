
import './register.css';
import {Link} from 'react-router-dom';

function Register() {
   const handleSubmit= (event) => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
  return (
    <div id="login">
    <div className="container">
        <div id="login-row" className="row justify-content-center align-items-center">
            <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <h3 className="text-center text-info">Register</h3>
                        <div className="form-group">
                            <label for="username" className="text-info">Name:</label><br/>
                            <input type="text"  className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label for="username" className="text-info">Age:</label><br/>
                            <input type="number"  min="1" max="100" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label for="username" className="text-info">Email:</label><br/>
                            <input type="text"   className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label for="password" className="text-info">Enter Password:</label><br/>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label for="password"  className="text-info">Re Enter Password:</label><br/>
                            <input type="text"  className="form-control"/>
                        </div>
                        <div className="form-group"><br/>
                            <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"/>
                        </div>
                        <div id="register-link" className="text-right">
                        <Link to="/">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Register;
