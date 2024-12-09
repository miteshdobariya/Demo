import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Link from 'antd/es/typography/Link';
import Heroslider from './Heroslider';
import './assets/img/hotel.css';



import Searvice from './Searvice';
import Card from './Card';
import About from './About';
import Main from './Main';
import Roominner from './Roominner';
import Newpage from './Newpage';
import Classic from './Classic';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes,useLocation  } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Roominsert from './Roominsert';
import Forgot from './Forgot';
import Otp from './Otp';
import DelayedApp from './DelayedApp';
import Roomdetail from './Roomdetail';
import Booking from './Booking';
// import Use from './Use';
// import Demo1 from './Demo1';
// import Demo2 from './Demo2';
// import Component1 from './Component/Component1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <>

        <BrowserRouter >
        {/* {location.pathname !== "/" && <Header />} */}
             {/* <Header/> */}
            
             <Routes>
                
                    
                <Route path="/" element={<DelayedApp />} />
                <Route path="/home" element={localStorage.getItem('loginnn')=="done" ? <Main /> : <Login/>} />
                <Route path="/about" element={localStorage.getItem('loginnn')=="done" ? <About /> : <Login/>} />
                <Route path="/Roominner" element={localStorage.getItem('loginnn')=="done" ? <Roominner /> : <Login/>} />
                <Route path="/Classic" element={localStorage.getItem('loginnn')=="done" ? <Classic /> : <Login/>} />
                {/* <Route path="/page" element={localStorage.getItem('user')=="mitesh" ? <Newpage /> : <Main/>} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/roominsert" element={localStorage.getItem('nameofuser')=="mitesh" ? <Roominsert /> : <Main/>} />
                <Route path="/forgot" element={<Forgot />} />
                <Route path="/otp" element={<Otp />} />
                <Route path="/roomdetail/:id" element={<Roomdetail />} />
                <Route path="/booking/:id" element={<Booking />} />
                
            </Routes>
            


        </BrowserRouter>
    </>
);
