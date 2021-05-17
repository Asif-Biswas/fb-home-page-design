import React, { Component } from 'react';


class Story extends Component {
    render() {
        return (
            
            <div className='w3-card w3-border w3-display-container w3-hover-opacity w3-black' 
            style={{height:'150px', width:'100px', borderRadius:'10px', margin:'20px 8px 20px 8px', cursor:'pointer'}}>
            
                <div className='w3-display-middle'>
                <img style={{width:'96px', maxHeight:'142px', borderRadius:'3px'}} className='' src={this.props.src} alt='' />
                </div>

                <img className="w3-display-topleft w3-border w3-card-4" 
                style={{width:'40px', height:'40px', borderRadius:'50%', marginLeft:'5px', marginTop:'5px'}} src={this.props.pp} alt=''/>
                
                <p style={{margin:'auto', color:'white', bottom:'0px', position:'absolute', display:'flex', justifyContent:'center', width:'100%', textAlign:'center'}}>{this.props.name}</p>

            </div>
            
            
        );
    }
}

export default Story;
