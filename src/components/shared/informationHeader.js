import React from 'react';
 
class InformationHeader extends React.Component{
render(){
        return(
    <div className="container-fluid informationHeader" style={{background:'orange',color:'black',fontWeight:'bold',height:'auto',width:'auto'}}> 
    <div className="row">
    <div className="container textContainer" style={{marginBottom:'20px'}}>
            Everyone wants to live somewhere.You are here for it.
    </div>
        <div className="container-fluid ">
        <div className="row">
    <div className="profilePic col-md-3" style={{paddingBottom:'10px',marginBottom:'10px',float:'right',marginRight:'10px',marginLeft:'10px'}}>
    <img style={{height:'40px',width:'40px',borderRadius:'20px'}} src='https://api.adorable.io/avatars/285/abott@adorable.png' alt='owner'/>
    </div>
    <div className="homeButton  headText col-md-3" onClick={this.goToHome}>
    <p>Home </p>
    </div>
    <div className="searchButton headText col-md-3">
    <p>Search</p>
    </div>
    <div className="ChatButton headText col-md-3">
    <p>Chat</p>
    </div>
    </div>
    </div>
   </div>
    </div>
    );
} 
}

export default InformationHeader;
