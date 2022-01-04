import md5 from 'md5'
import React from 'react'
import './Register.css'
import TextField from '@mui/material/TextField';






class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            username:'',
            password:'',
            checkPassword:'',
            phone:'',
       


        }
        
    }
    handleChangeName =(event) => {
        this.setState({
            name:event.target.value
        })

    }

    handleChangeUsername = (event) => {
        this.setState({
            username:event.target.value
        })
      
    }
    handleChangePassword =( event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleChangeCheckPassworld = (event) => {
        this.setState({
            checkPassword: event.target.value
        })
    }
    handleChangePhone = (event) => {
        this.setState({
            phone: event.target.value
        })
    }
   
   
    handleClick = () => {
        
       
        if(this.state.password !== this.state.checkPassword || this.state.phone.length > 10 || this.state.phone.length <9)
        { 
           alert('phone')
            
        }
       else
        {
            console.log('Name :' ,this.state.name, 'UserName Account: ',this.state.username, 'Passwword: ' ,md5("value").toString(),'Phone: ',this.state.phone)
            
    
        } 
       /*  if(this.state.phone.length > 10 || this.state.phone.length <9)
        {
            alert(" Định dạng số điện thoại không hợp lệ")
        }
        else
        {
            console.log('Name account:' ,this.state.name, 'UserName: ',this.state.username, 'Phone: ',this.state.phone)
            console.log(md5("value").toString());
    
        } */
        
        
     
        
    }
    
    render() {
        //jsx

        return(
            
            
            <div className='login-background'>
              
              
                <div className='register-container'>
                
                    <div className='login-content'>
                          <div>
                          <img src='/icon/picture-login/logo.png' className='logo-picture'/>
                            </div> 
                           <div className='register-header'>
                            Register a new account
                            </div>

                           <span className='register-span'>Enter your Name</span>
                            <div>
                                <input type='text'
                                 placeholder='Enter your Name' 
                                 className='form-control-register'
                                 value={this.state.name}
                                 onChange={(event) => this.handleChangeName(event)}
                                 
                                />
                            </div>
                           {/*  <TextField id="standard-basic" label="Standard" variant="standard" />  */}

                           <span className='register-span'>Enter your Username</span>
                            <div>
                                <input type='text'
                                 placeholder='Enter your username' 
                                 className='form-control-register'
                                 value={this.state.username}
                                 onChange={(event) => this.handleChangeUsername(event)}
                                 
                                />
                            </div>

                     {/*        <div className='icon-username'>
                                 <i className='fas fa-user icon-user' ></i>     
                            </div>
                             */}
                            <span className='register-span'>Enter your Password</span>
                            <div>
                            
                                <input type='password'
                                 placeholder='Enter your password'
                                  className='form-control-register'
                                  value={this.state.password}
                                  onChange={(event) => this.handleChangePassword(event)}
                                   />
                            </div>
                            <span className='register-span'>Enter the Password</span>
                            <div>  
                            <input type='password'
                             placeholder='Enter the password'
                              className='form-control-register'
                              value={this.state.checkPassword}
                              onChange={(event) => this.handleChangeCheckPassworld(event)}
                             
                               />
                             
                             </div>
                             <span className='register-span'>Enter your Phone</span>
                             <div>  
                            <input type='number'
                             placeholder='Enter your Phone'
                              className='form-control-register'
                              value={this.state.phone}
                              onChange={(event) => this.handleChangePhone(event)}
                               />
                             </div>
                           
                          
                           {/*  <div className='icon-passworld'>
                                <i className="fas fa-key icon-passworld" ></i>
                            </div> */}
                          
                          
                         
                        
                            <input type='checkbox' 
                            value='term-conditions'
                            className='register-checkbox'
                            //checked={checked}
                            //onChange={() => setChecked(!checked)}
                          
                            ></input>
                              <span className='term-register'> I have read the <a className='link_' href='#'> terms</a> and <a className='link_' href='#'>conditions carefully</a> </span>
                             
                            <div className='login-btn'>
                                <button  className='register-button'
                                onClick={(event) =>this.handleClick(event)}
                                > Register 
                                </button>
                            </div>
                            <div className='text-or'>Or</div>

                            <div className='login-different'>
                                 <i className='fab fa-google icon-google' ></i>
                                 <i className='fab fa-facebook icon-facebook' ></i>
                                 <i className='fab fa-instagram  icon-ins'></i>
                            </div>

                          {/*   <div className='new-account'>
                                <a className='text-newaccount' href='#'>Register a new account.</a>
                            </div>      */}                       
                    </div>
                </div>
            </div>
        )
    }
}
export default Register