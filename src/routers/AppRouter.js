import React from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import RentalListing from '../components/rentals/RentalListing'
import RentalDetail from '../components/rentals/RentalDetail'
import Login from '../components/login/login'
import Register from '../components/register/register' 
import {ProtectedRoute} from '../components/shared/auth/protectedRoute'
import {LoggedInRoute} from '../components/shared/auth/loggedInRoute'
import RentalSearchListing from '../components/rentals/RentalSearchListing'
import RentalCreate from '../components/rentals/rentalCreate'
import RentalManage from '../components/rentals/rentalManage'
import BookingManage from '../components/booking/bookingManage'
import InformationHeader from '../components/shared/informationHeader'
import SidebarHeader from '../components/shared/headerWithSideNav'

const AppRouter=(props)=>{
 return(
        <BrowserRouter>
        <div className="App">
        <div className="container-fluid">
        <div class="row">
        <Header logout={props.logout}/> 
        <SidebarHeader />
        </div>
      </div>
      <InformationHeader />
          <div className='container-fluid'>
          <Switch>
            <Route exact path='/' render={()=><Redirect to='/rentals'/>}/>
            <Route path="/rentals" component={RentalListing} exact />
            <ProtectedRoute path="/rentals/new" component={RentalCreate} exact />
            <ProtectedRoute path="/rentals/manage" component={RentalManage} exact />
            <ProtectedRoute path="/bookings/manage" component={BookingManage} exact />
            <Route path="/rentals/:id?" component={RentalDetail} exact />
            <LoggedInRoute path="/register" component={Register} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/rentals/:city/homes" component={RentalSearchListing} exact/>
          </Switch> 
          </div>
          <Footer />
        </div>
        </BrowserRouter>
    ); 
}

export default AppRouter;