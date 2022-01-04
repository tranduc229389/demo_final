import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' 
import Login from '../containers/Login'
import Register from '../register/Register'




// Tạo component App
function App() {
    return (
        <span className='content-container'>
         {/*  <Login/> */}
         <Register/>
        
        </span>
    )
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))

