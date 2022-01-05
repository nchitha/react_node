
import './login.css';

import {Link} from 'react-router-dom';

function Login() {
  return (
      <div>
            <h3 className="text-center text-white pt-5">Login form</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                        <div  className="col-md-12">
                            <form className="form">
                                <h3 className="text-center text-info">Login</h3>
                                <div className="form-group">
                                    <label for="username" className="text-info">Email:</label><br/>
                                    <input type="text"  className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="password" className="text-info">Password:</label><br/>
                                    <input type="password"  className="form-control"/>
                                </div>
                                <div className="form-group"><br/>
                                    <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"/>
                                </div>
                                <div id="register-link" className="text-right">
                                    <Link to="/register">Register</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
  );
}

export default Login;
