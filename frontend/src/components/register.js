
import './register.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3001/api";
function Register() {
    
    const [firstName,setfirstName] = useState("");
    const [lastName,setlastName] = useState("");
    const [Age,setAge] = useState(0);
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
    const [Gender,setGender] = useState("male");
    const [RePassword,setRePassword] = useState("");
    const [Photo,setPhoto] = useState("");
    function handleGender(event) {
        setGender(event.target.value);
    }
    function handleFirstName(event) {
        setfirstName(event.target.value);  
    }
    function handlelastName(event) {
        setlastName(event.target.value);  
    }
    function handleAge(event) {
        setAge(event.target.value);  
    }
    function handleEmail(event) {
        setEmail(event.target.value);  
    }
    function handlePassword(event) {
        setPassword(event.target.value);  
    }
    function handleRePassword(event) {
        setRePassword(event.target.value);  
    }
    function handlePhoto(event) {
        setPhoto(event.target.value);  
    }
   const handleSubmit= (event) => {
       // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();console.log(Gender,firstName,lastName,Password,RePassword,Email,Gender,Age,Photo);
        axios.post('/user', {
            firstName: firstName,
            lastName: lastName,
            email: Email,
            password:Password,
            age:Age,
            gender:Gender,
            photo:Photo

          })
          .then(function (response) {
            console.log(response);
            localStorage.setItem("user", JSON.stringify(response.data));
            localStorage.setItem("token", JSON.stringify(response.data.token[0].token));
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
  return (
    <div id="login">
    <div className="container">
        <div id="login-row" className="row justify-content-center align-items-center">
            <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                    <form className="form" onSubmit={handleSubmit}>
                        <h3 className="text-center text-info">Register</h3>
                        <div className="form-group">
                            <label htmlFor="firstname" className="text-info"> First Name:</label><br/>
                            <input type="text" value={firstName} onChange={handleFirstName} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname" className="text-info"> Last Name:</label><br/>
                            <input type="text" value={lastName} onChange={handlelastName}  className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="age" value={Age} onChange={handleAge} className="text-info">Age:</label><br/>
                            <input type="number"  min="1" max="100" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender" className="text-info">Gender:</label><br/>
                            <select className="form-control" value={Gender} onChange={handleGender}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                </div>
                        <div className="form-group">
                            <label htmlFor="email" className="text-info">Email:</label><br/>
                            <input type="text"  value={Email} onChange={handleEmail}  className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="text-info">Enter Password:</label><br/>
                            <input type="text" value={Password} onChange={handlePassword}  className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="re-password"  className="text-info">Re Enter Password:</label><br/>
                            <input type="text" value={RePassword} onChange={handleRePassword}  className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="photo"  className="text-info">Photo:</label><br/>
                            <input type="text" value={Photo} onChange={handlePhoto}  className="form-control"/>
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
