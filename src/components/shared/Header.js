import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import RentalSearchInput from 'components/rentals/RentalSearchInput' 
import { StickyContainer, Sticky } from 'react-sticky'; 


class Header extends React.Component{

constructor(){
  super()
  this.handleLogout = this.handleLogout.bind(this)
}

handleLogout(){
this.props.logout()
this.props.history.push('/rentals')
}

// render
renderLinkButton(isAuth){

  if(isAuth){
    return <p className='nav-item nav-link clickable' onClick={this.handleLogout}>Logout</p>
    
  }

  return (
    <React.Fragment>
    <Link className='nav-item nav-link'  style={{color:"black"}} to='/login'>Login <span className='sr-only'>(current)</span></Link>
    <Link className='nav-item nav-link' style={{color:"black"}} to='/register'>Register</Link>
    
    </React.Fragment>)
}

//onStickyState(){

//}

renderOwnerSection(isAuth){
if(isAuth){
  return(
    <div className="nav-item dropdown">
          <a className="nav-link nav-item dropdown-toggle clickable" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Owner Section
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link className="dropdown-item" to="/rentals/new">Create Rental</Link>
            <Link className="dropdown-item" to="/rentals/manage">Manage Rentals</Link>
            <Link className="dropdown-item" to="/bookings/manage">Manage Bookings</Link>
          </div>
        </div>
    )
  }
}

render(){
    const {username,isAuth} = this.props.auth
    return (
        <nav className='navbar navbar-dark navbar-expand-lg' >
       <div className='container-fluid'>
       
          <Link className='navbar-brand' to='/rentals'>BookWithMe
          <img src={process.env.PUBLIC_URL+'/img/react-logo.svg'} alt=""/>
          </Link>
          <Link className='navbar-brand-image center-md' to='/rentals'>
          <img  src={process.env.PUBLIC_URL+'/img/react-logo.svg'} alt=""/>
          </Link>
         
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav ml-auto'>
          {isAuth &&
            <a className='nav-item nav-link' >{username}</a>
          }
           {this.renderLinkButton(isAuth)}
           {this.renderOwnerSection(isAuth)}              
              </div>
          </div>
        </div>
        <hr />
      </nav>
      )
  }
 
}


function mapStateToProps(state){
  return{
    auth:state.auth
  }
}

export default withRouter(connect(mapStateToProps)(Header))




// class Header extends React.Component{

//   constructor(){
//     super()
  
//     //this.handleLogout = this.handleLogout.bind(this)
//   }
  
//   // handleLogout(){
//   // this.props.logout()
//   // this.props.history.push('/rentals')
//   // }
  
//   // render
//   renderLinkButton(isAuth){
  
//     if(isAuth){
//       return <p className='nav-item nav-link clickable' onClick={this.handleLogout}>Logout</p>
   
//     }
  
//     return (
//       <React.Fragment>
//       <Link className='nav-item nav-link' to='/login'>Login <span className='sr-only'>(current)</span></Link>
//       <Link className='nav-item nav-link' to='/register'>Register</Link>
//       </React.Fragment>)
//   }
  
//   //onStickyState(){
  
//   //}
  
//   // renderOwnerSection(isAuth){
//   // if(isAuth){
//   //   return(
//   //     <div className="nav-item dropdown">
//   //           <a className="nav-link nav-item dropdown-toggle clickable" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//   //             Owner Section
//   //           </a>
//   //           <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//   //             <Link className="dropdown-item" to="/rentals/new">Create Rental</Link>
//   //             <Link className="dropdown-item" to="/rentals/manage">Manage Rentals</Link>
//   //             <Link className="dropdown-item" to="/bookings/manage">Manage Bookings</Link>
//   //           </div>
//   //         </div>
//   //     )
//   //   }
//   // }
  
//     render(){
//       const {username,isAuth} = this.props.auth
//       return (
//         <StickyHeader
//          //This is the sticky part of the header.
//              header={
//           <nav className='navbar navbar-dark navbar-expand-lg'>
//           <div className='container'>
//             <Link className='navbar-brand' to='/rentals'>BookWithMe
//             <img src={process.env.PUBLIC_URL+'/img/react-logo.svg'} alt=""/>
//             </Link>
//             <Link className='navbar-brand-image' to='/rentals'>
//             <img  src={process.env.PUBLIC_URL+'/img/react-logo.svg'} alt=""/>
//             </Link>
           
//             <RentalSearchInput />
//             <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
//               <span className='navbar-toggler-icon'></span>
//             </button>
//             <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
//               <div className='navbar-nav ml-auto'>
//             {isAuth &&
//               <a className='nav-item nav-link' >{username}</a>
//             }
//              {this.renderLinkButton(isAuth)}              
//                 </div>
//             </div>
//           </div>
//         </nav> 
//             }
//             backgroundImage={process.env.PUBLIC_URL+'/img/railway-station.PNG'}
//             headerOnly={false}
//             className="stickyHeader"
//           >
//             <section>
//             <div style={{ height: '400px' }} />
//             </section>
//           </StickyHeader>
        
//           )
//     }
   

  