import React, {Component} from 'react';

export default class SideBar extends Component {
    render(){
        return (
        	<aside className="main-sidebar">
            <section className="sidebar">
            <div className="user-panel">
            <div className="pull-left image">
            <img src="/img/user2-160x160.jpg" className="img-circle"/>
            </div>
            <div className="pull-left info">
                        <p>Alexander Pierce</p>
                        <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                    </div>

                     </div>
                     <form action="#" method="get" className="sidebar-form">
                    <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search..." />
                        <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                </button>
              </span>
                    </div>
                </form>
                <ul className="sidebar-menu tree" data-widget="tree">
                    <li className="header">MAIN NAVIGATION</li>
                    <li className="active treeview">
                        <a href="#">
            <i className="fa fa-dashboard"></i> <span>Dashboard</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          </li>
          <li className="treeview">
                        <a href="#">
            <i className="fa fa-files-o"></i>
            <span>Layout Options</span>
            <span className="pull-right-container">
              <span className="label label-primary pull-right">4</span>
            </span>
          </a>
          </li>
          <li>
            <a href="pages/widgets.html">
            <i className="fa fa-th"></i> <span>Widgets</span>
            <span className="pull-right-container">
              <small className="label pull-right bg-green">new</small>
            </span>
          </a>
                    </li>
                    <li className="treeview">
                        <a href="#">
            <i className="fa fa-pie-chart"></i>
            <span>Charts</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
                    </li>
                    <li className="treeview">
                        <a href="#">
            <i className="fa fa-laptop"></i>
            <span>UI Elements</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
</li>
<li className="treeview">
                        <a href="#">
            <i className="fa fa-edit"></i> <span>Forms</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
</li>
<li className="treeview">
                        <a href="#">
            <i className="fa fa-table"></i> <span>Tables</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
</li>
<li>
                        <a href="pages/calendar.html">
            <i className="fa fa-calendar"></i> <span>Calendar</span>
            <span className="pull-right-container">
              <small className="label pull-right bg-red">3</small>
              <small className="label pull-right bg-blue">17</small>
            </span>
          </a>
          </li>
          <li>
                        <a href="pages/mailbox/mailbox.html">
            <i className="fa fa-envelope"></i> <span>Mailbox</span>
            <span className="pull-right-container">
              <small className="label pull-right bg-yellow">12</small>
              <small className="label pull-right bg-green">16</small>
              <small className="label pull-right bg-red">5</small>
            </span>
          </a>
                    </li>
                    <li className="treeview">
                        <a href="#">
            <i className="fa fa-folder"></i> <span>Examples</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
</li>
<li className="treeview">
                        <a href="#">
            <i className="fa fa-share"></i> <span>Multilevel</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
</li>
<li><a href="https://adminlte.io/docs"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
<li className="header">LABELS</li>
<li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
<li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
<li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>




          </ul>

                
                </section>
                </aside>

        )
    }
}