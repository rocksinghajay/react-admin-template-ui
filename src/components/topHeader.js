import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
            <header className="main-header">
                <a href="#" className="logo">
                    <span className="logo-lg"><b>Admin</b>LTE</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <i class="fas fa-bars">
                        </i>
                    </a>
                    <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                    <li className="dropdown messages-menu">
              <i className="fa fa-envelope-o"></i>
              <span className="label label-success">4</span>
            </li>
            <li className="dropdown notifications-menu">
              <i className="fa fa-bell-o"></i>
              <span className="label label-warning">10</span>
              </li>
              <li className="dropdown task-menu">
              <i className="fa fa-flag-o"></i>
              <span className="label label-danger">9</span>
              </li>
              <li className=" user-header">
              <img  src="/img/user2-160x160.jpg" className="circle"/>
              <p>Alexander Pierce</p>
              </li>
              <li>
              <i className="fa fa-gears"></i>
              </li>

                    </ul>
                    </div>
                    </nav>
            </header>
            
        
        )
    }
}