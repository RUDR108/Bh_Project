import React from 'react';
import {Link} from 'react-router-dom' 


class InformationHeader extends React.Component{
render(){
        return(
    <div className="container-fluid informationHeader" style={{background:'orange',color:'black',fontWeight:'bold',height:'auto',width:'auto'}}> 
    <div className="row">
    <div className="container textContainer" style={{marginBottom:'20px'}}>
            Everyone wants to live somewhere.You are here for it.
    </div>
        <div className="container container__row">
        
    <Link to="/home" style={{textDecoration:'none'}}>  
    <div className="homeButton  headText col-md-3 container__col-3" onClick={this.goToHome}>
    <center>Home </center>
    </div></Link>
    <Link to="/rooms" style={{textDecoration:'none'}}>
    <div className="searchButton headText col-md-3 container__col-3">
    <center><p>Search</p></center>
    </div></Link>
    <Link to="/chat" style={{textDecoration:'none'}}>
    <div className="ChatButton headText col-md-3 container__col-3" >
    <center><p>Chat</p></center>
    </div></Link>
    <Link to="/profile" style={{textDecoration:'none'}}>
    <div className="ChatButton headText col-md-3 container__col-3">
    <center><p>Profile</p></center>
    </div></Link>
    </div> 
   </div>
    </div>
    );
} 
}

export default InformationHeader;

// <div className="profilePic col-md-3 container__col-3" style={{paddingBottom:'10px',marginBottom:'10px',float:'right',marginRight:'10px',marginLeft:'10px'}}>
// <img style={{height:'40px',width:'40px',borderRadius:'20px'}} src='https://api.adorable.io/avatars/285/abott@adorable.png' alt='owner'/>
// </div>
