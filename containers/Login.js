import md5 from 'md5'
import React from 'react'
import './Login.css'




class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            passworld:''

        }
        
    }
/*     handleChange = (event) => {
        this.setState({
            username:event.target.value
        })
        
    } */
    handleChangeUsername = (event) => {
        this.setState({
            username:event.target.value
        })
      
    }
    handleChangePassworld =( event) => {
        this.setState({
            passworld: event.target.value
        })
    }
 
    handleClick = () => {
        if(this.state.username === 'tranduc' &&this.state.passworld === '123456')
        {
            alert('Login Thành Công!')
        }
        else
        {
            alert('Sai Tài khoản or Password')
        }
        console.log('Username: ',this.state.username , ' Passworld: ' ,this.state.passworld)
        console.log('All account:' ,this.state)
        console.log(md5("value2").toString());
        console.log(md5("value1").toString());
        
    }
    
    render() {
        //jsx

        return(
            
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content'>
                          <div>
                                <img src='/icon/picture-login/logo.png' className='logo-picture'/>
                            </div> 
                           <div className='login-header'>Login</div>
                              
                            <div>
                                <input type='text'
                                 placeholder='Enter your username' 
                                 className='form-control'
                                 value2={this.state.username}
                                 onChange={(event) => this.handleChangeUsername(event)}
                                 //onFocus={this.state.username}
                                />
                            </div>
                            <div className='icon-username'>
                                 <i className='fas fa-user icon-user' ></i>     
                            </div>
                            <div>
                            
                                <input type='password'
                                 placeholder='Enter your password'
                                  className='form-control'
                                  value1={this.state.passworld}
                                  onChange={(event) => this.handleChangePassworld(event)}
                                   />
                            </div>
                           
                          
                            <div className='icon-passworld'>
                                <i className="fas fa-key icon-passworld" ></i>
                            </div>
                          
                          
                                <input type='checkbox' value='remember me' className='login-checkbox'></input>
                              <span className='save-login'> Remember me</span>
                              <a href='#' className='forgot-passworld'>Forgot your passworld?</a>
                        
                         
                            <div className='login-btn'>
                                <button  className='login-button'
                                onClick={(event) =>this.handleClick(event)}
                                >Login
                                </button>
                            </div>
                            <div className='text-or'>Or</div>

                            <div className='login-different'>
                                 <a className='fab fa-google icon-google'   href='#'></a>
                                 <i className='fab fa-facebook icon-facebook' ></i>
                                 <i className='fab fa-instagram  icon-ins'></i>
                            </div>
                            <div className='new-account'>
                                <a className='text-newaccount' href='#'>Register a new account.</a>
                            </div>                            
                    </div>
                </div>
            </div>
        )
    }
}
export default Login