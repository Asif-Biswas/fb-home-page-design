import React, { Component } from 'react';
import mark from '../images/mark.jpg'

class FriendRequest extends Component {
    render() {
        return (
            <div className='w3-container w3-hover-grey' style={{borderRadius:'10px', paddingBottom:'10px'}}>
                <a className='w3-row' href='#' style={{textDecoration:'none'}}>
                    
                    <div className='w3-center w3-col' style={{width:'25%', paddingTop:'15px'}}>
                        <img className='w3-center' src={mark} width='50px' height='55px' alt='iamge' style={{borderRadius:"50%"}}/>
                    </div>
                    <div className='w3-col' style={{display:'inline', width:'75%', paddingLeft:'5px'}}>
                        <h4>Mark Zuckerberg</h4>
                        <p style={{marginTop:'-10px', marginBottom:'-1px'}}>3 mutual friend</p>
                        <button className='w3-blue w3-padding-small w3-hover-blue-gray' style={{border:'none', cursor: 'pointer', borderRadius:'10%'}}>Confirm</button>
                        <button className=' w3-light-grey w3-hover-blue-gray w3-padding-small w3-opacity-min w3-margin-left' style={{border:'none', cursor: 'pointer', borderRadius:'10%'}}>Delete</button>

                    
                    </div>
                </a>
            </div>
        );
    }
}

export default FriendRequest;