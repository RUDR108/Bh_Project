import React from 'react';
import Sidebar from "react-sidebar";
import {Link} from 'react-router-dom' 

class SidebarHeader extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.state = {
    
      sidebarOpen:false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

buttonStyles={
    height:'auto',
    width:'30px',
    backgroundColor:'white',
    color:'black',
    padding:'10px',
    margin:'10px',
    float:'right',
    position:'relative',
    display:'block',
    marginRight:'20px',
    zIndex:'2'
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen:open});
  }
 
  render() {
    return (
      <Sidebar
          className="sidebarHeader"
          sidebar={
            <div className="sidebarContent">
            <Link className='navbar-brand' to='/rentals'>BookWithMe
            <img src={process.env.PUBLIC_URL+'/img/react-logo.svg'} alt=""/>
            </Link>
            
            <hr />
            </div>
          
          }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{sidebar:{backgroundColor:'black'}}}
        >
      <button className="sidenavButton" style={this.buttonStyles} onClick={() => this.onSetSidebarOpen(true)}><i className='fa fa-bars'></i></button>
                   
        </Sidebar>
          );
  }
}
 
export default SidebarHeader;