import React from 'react'
import {Link} from 'react-router-dom'
import { Field, reduxForm } from 'redux-form';
import { BwmTextArea } from '../../components/shared/form/BwmTextArea'

class PersonalHomePage extends React.Component{
    
    

    render(){
        return(
        <div className='homePageDiv '>
        <div className='row'>
        <div className='col-md-4 col-xs-6' style={{marginBottom:'10px'}}>
            <Link className='thaught-detail-link' to="/rentals">
            <div className='card thaught-card' style={{backgroundColor:'white'}}>
              <center><h3 style={{color:'black'}}>THAUGHT TODAY</h3>
              <p style={{marginBottom:'10px',color:'black'}}>Work hard to achieve success.It is what always matters to you.</p>
                </center>
              </div>
            </Link>
          </div>
          <div className='col-md-4 col-xs-6' style={{marginBottom:'10px'}}>
            <Link className='due-detail-link' to="/rentals">
            <div className='card Due-card' style={{backgroundColor:'white'}}>
              <center><h3 style={{color:'red'}}>Due Panding</h3>
              <p style={{marginBottom:'10px',color:'red'}}>You have 6,7543 rupees Panding till 30 february.Check your whole status.</p>
                </center>
              </div>
            </Link>
          </div>
          <div className='col-md-4 col-xs-6' style={{marginBottom:'10px'}}>
          <Link className='new-detail-link' to="/rentals">
          <div className='card New-card' style={{backgroundColor:'white'}}>
            <center><h3 style={{color:'green'}}>New Around us</h3>
            <p style={{marginBottom:'10px',color:'green'}}>something new.</p>
              </center>
            </div>
          </Link>
        </div>
        </div>
        <div className='row '>
        <div className='col-md-6' style={{marginBottom:'10px'}}>
        <Link className='timetable-detail-link' to="/timetable">
        <center><h3 style={{color:'black',fontWeight:'bold',borderBottom:'1px solid black'}}>Food for you</h3></center>
        <table>
  <tr>
    <th>Day</th>
    <th>breakfast</th>
    <th>Lunch</th>
    <th>Snack</th>
    <th>Dinner</th>
  </tr>
  <tr>
    <td>Monday</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Tuesday</td>
    <td>Francisco Chang sdcsd sdfcsd</td>
    <td>Mexico</td> 
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Wednesday</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Thursday</td>
    <td>Helen Bennett</td>
    <td>UK</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Friday</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Saturday</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>Sunday</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>
        </Link>
      </div>
</div>
</div>
       )
    }
}

export default PersonalHomePage;