import React from 'react'

import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
//import RentalSearchInput from 'components/rentals/RentalSearchInput' 

class Footer extends React.Component{
    render(){
        
        return(

<footer className="page-footer font-small blue-grey lighten-5">
       <div className="footerClass">
        <div className="styleContainer">
         <div className="container">

  {/*Grid row*/}
        <div className="row py-4 d-flex align-items-center">

        {/*<!-- Grid column -->*/}
          <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
            <h6 className="mb-0 white-text">Always ready to help.Join us on different platforms.</h6>
          </div>
         {/*<!-- Grid column -->*/}
          <div className="col-md-6 col-lg-7 text-center text-md-right">

            {/*<!-- Facebook -->*/}
            <a className="fb-ic">
              <i className="fa fa-facebook-square white-text mr-4"> </i>
            </a>
            {/*<!-- twitter -->*/}
            <a className="tw-ic">
              <i className="fa fa-twitter white-text mr-4"> </i>
            </a>
            {/*<!-- google+ -->*/}
            <a className="gplus-ic">
              <i className="fa fa-google-plus white-text mr-4"> </i>
            </a>
            {/*<!-- linkedin -->*/}
            <a className="li-ic">
              <i className="fa fa-linkedin white-text mr-4"> </i>
            </a>
            {/*<!-- instagram -->*/}
            <a className="ins-ic">
              <i className="fa fa-instagram white-text"> </i>
            </a>

          </div>
        {/*<!-- Grid column -->*/}

        </div>
        {/*<!-- Grid row-->*/}
        </div>
        </div>
      
<div className="linkContainer" >
    {/*<!-- Footer Links -->*/}
    <div className="container container-middle text-center text-md-left mt-5">

        {/*<!-- Grid row -->*/}
      <div className="row mt-3 dark-grey-text">

        {/*<!-- Grid column -->*/}
        <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
        {/*<!-- Content -->*/}
          <h6 className="text-uppercase font-weight-bold">An NGO</h6>
          <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"/>
          <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.</p>

        </div>
        {/*<!-- Grid column -->*/}

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

        {/*<!-- Links -->*/}
          <h6 className="text-uppercase font-weight-bold">Products</h6>
          <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"  />
          <p>
            <a className="dark-grey-text" href="#!">MDBootstrap</a>
          </p>
          <p>
            <a className="dark-grey-text" href="#!">MDWordPress</a>
          </p>
          <p>
            <a className="dark-grey-text" href="#!">BrandFlow</a>
          </p>
          <p>
            <a className="dark-grey-text" href="#!">Bootstrap Angular</a>
          </p>

        </div>
             {/*<!-- Grid column -->*/}

        {/*<!-- Grid column -->*/}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

          {/*<!-- Link -->*/}
          <h6 className="text-uppercase font-weight-bold">Useful links</h6>
          <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"  />
          <p>
            <a className="dark-grey-text" href="#!">Your Account</a>
          </p>
          <p>
            <a className="dark-grey-text" href="#!">Become an Affiliate</a>
          </p>
          <p>
            <a className="dark-grey-text" href="#!">Shipping Rates</a>
          </p>
          <p>
            <a className="dark-grey-text" href="#!">Help</a>
          </p>

        </div>
        {/*<!-- Grid column -->*/}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

          {/*<!-- Link -->*/}
          <h6 className="text-uppercase font-weight-bold">Contact</h6>
          <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"  />
          <p>
            <i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
          <p>
            <i className="fa fa-envelope mr-3"></i> info@example.com</p>
          <p>
            <i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
          <p>
            <i className="fa fa-print mr-3"></i> + 01 234 567 89</p>

        </div>
        {/*<!-- Grid column -->*/}

      </div>
      {/*<!-- Grid rows -->*/}

    </div>
    {/*<!-- Footer Links-->*/}
            </div>
    {/*<!-- Copyrigth -->*/}
    <div className="footer-copyright text-center text-black-50 py-3">Developed by-
      <a className="dark-grey-text" href="https://mdbootstrap.com/education/bootstrap/"> Someone</a>
    </div>
    {/*<!-- Copyright -->*/}

    </div>
 {/*<!-- Footer-->*/}
 </footer>


        );
    }
}

export default Footer;