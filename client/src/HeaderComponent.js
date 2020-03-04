import React from 'react';
import './App.css';
import { Formik } from 'formik';

class HeaderComponent extends React.Component {

    constructor(props){
        super(props);
    }
    
    componentDidMount() {
    }
       
    render() {
        return (
          <div><a href="/login">Login</a>&nbsp;&nbsp;<a href="/logout">Logout</a></div>
        );
      }
 }
 export default HeaderComponent;