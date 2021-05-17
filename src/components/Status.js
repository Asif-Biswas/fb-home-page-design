import React, { Component } from 'react';
import { AiFillLike } from 'react-icons/ai';
import asif from '../images/asif.jpg'
import { GoComment } from 'react-icons/go'
import {GrLike} from 'react-icons/gr';
import {RiShareForwardLine} from 'react-icons/ri';


class Status extends Component {
    render() {
        return (
            <div className='w3-card-4 w3-container' style={{borderRadius:'10px', margin:'8px 0 8px 0'}}>
                <div className='' style={{display:'flex', margin:'8px'}}>
                <img style={{borderRadius:'50%', float:'left', margin:'8px'}} width='50px' height='50px' src={asif} alt=''/>
                <div className='' style={{}}>
                    <h5 style={{paddingLeft:'8px'}}>Asif Biswas</h5>
                    <p style={{paddingLeft:'8px', marginTop:'-8px'}}>1h ago</p>
                </div>
                </div>

                <p>
                    {this.props.body}
                </p>
                <img src='' alt=''/>

                <div style={{display:'flex', justifyContent:'space-between', cursor:'pointer'}}>
                    <div style={{}}>
                    <button className='w3-border-0' style={{ backgroundColor:'rgb(70, 70, 70)', marginRight:'-8px'}}><AiFillLike/></button>
                    <button className='w3-border-0' style={{ backgroundColor:'rgb(70, 70, 70)', marginRight:'-8px'}}>🧡</button>
                    <button className='w3-border-0' style={{ backgroundColor:'rgb(70, 70, 70)'}}>😮</button>
                    <span style={{fontSize:'10px'}}>Kayes Sheikh and 884 others</span>
                    </div>
                    
                    <span style={{fontSize:'10px', paddingTop:'5px', cursor:'pointer'}}>895 Comments</span>
                    <span style={{fontSize:'10px', paddingTop:'5px', cursor:'pointer'}}>133 Shares</span>
                    
                </div>
                <hr style={{margin:'1px'}}/>
                <div style={{display:'flex', justifyContent:'space-around'}}>
                    <button className='w3-border-0 w3-text-white w3-hover-dark-grey' style={{width:'33.3%', margin:'8px', backgroundColor:'rgb(70,70,70)', borderRadius:'5px', cursor:'pointer'}}><GrLike style={{fontSize:'16px', color:'blue'}}/> Like</button>
                    <button className='w3-border-0 w3-text-white w3-hover-dark-grey' style={{width:'33.3%', margin:'8px', backgroundColor:'rgb(70,70,70)', borderRadius:'5px', cursor:'pointer'}}><GoComment/> Comment</button>
                    <button className='w3-border-0 w3-text-white w3-hover-dark-grey' style={{width:'33.3%', margin:'8px', backgroundColor:'rgb(70,70,70)', borderRadius:'5px', cursor:'pointer'}}><RiShareForwardLine/> Share</button>
                </div>

            </div>
        );
    }
}

export default Status;