import React from 'react';
import '../App.css';
import './header.css';
import elancoLogo from "../assets/images/logo.svg";
import userIcon from "../assets/images/Sajeesh.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faComments, faQuestionCircle, faSearch } from '@fortawesome/free-solid-svg-icons'

const inboxIcon = <FontAwesomeIcon icon={faComments} />
const bellIcon = <FontAwesomeIcon icon={faBell} />
const infoIcon = <FontAwesomeIcon icon={faQuestionCircle} />
const searchIcon = <FontAwesomeIcon icon={faSearch} />

class HeaderComponent extends React.Component {

    constructor(props){
        super(props);
    }
    
    componentDidMount() {
    }
       
    render() {
        return (
          <div>
          <div class="header">
            <div className="wrapper">
              <div class="logo"><img src={elancoLogo}></img></div>
              <div className="menu">
                <a href="/Post">Post</a>
              </div>
              <div className="menu">
                <a href="/Reports">Reports</a>
              </div>
              <div className="utilities">
                <div className="searchUtility">
                  <input type="text" placeholder="Start a new search here..."></input> 
                  <div className="searchIcon">{searchIcon}</div>
                </div>
                <div className="icon">
                 {bellIcon}                
                </div>               
                <div className="icon">
                 {infoIcon}                
                </div>
                <div className="userIcon">
                 <img src={userIcon} width="42px" />        
                </div>
              </div>
            </div>
          </div>
          {this.props.name}
          </div>
        );
      }
 }
 export default HeaderComponent;