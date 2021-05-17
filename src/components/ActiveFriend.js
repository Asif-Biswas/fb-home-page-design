import React, { Component } from 'react';

class ActiveFriend extends Component {
    render() {
        return (
            <div className=' w3-container'>
                <div className='w3-container w3-hover-grey' style={{borderRadius:'15px'}}>
                <a href='#' style={{textDecoration:'none'}}>
                    
                    <div style={{paddingTop:'8px', paddingBottom:'8px'}}>
                        <img src={this.props.src} width='40px' height='45px' alt='iamge' style={{borderRadius:"50%"}}/>
                        <h4 style={{display:'inline', paddingLeft:'10px'}}>{this.props.name}</h4>
                    </div>
                </a>
            </div>
            </div>
        );
    }
}

export default ActiveFriend;