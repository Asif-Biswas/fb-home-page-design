import React, { Component } from 'react';

class Postt extends Component {
    render() {
        return (
            <div className='w3-card-4 w3-padding-16' style={{marginBottom:'8px', borderRadius:'10px'}}>
                <div className='w3-row w3-container' style={{backgroundColor:'rgb(70,70,70)'}}>
                    <div className="w3-col" style={{width:'10%', display:'inline-block', marginLeft:'4px'}}>
                    <img src={this.props.mypp} width='50px' height='50px' alt='iamge' style={{borderRadius:"50%", float:'right'}}/>
                    </div>

                    
                    <input id='sf' className='w3-border-0 w3-dark-gray' type='text'
                     style={{borderRadius:'50px', width:'85%', height:'45px', marginLeft:'10px', fontSize:'20px',paddingLeft:'10px', backgroundColor:'rgb(70,70,70)'}}
                      placeholder="What's on your mind, Asif?"/>
                    
                </div>
                <hr/>

                <div style={{display:'flex', justifyContent:'space-around'}}>
                    <button className='w3-padding w3-dark-grey w3-hover-gray w3-border-0' style={{borderRadius:'10px', cursor: 'pointer'}}>Live Video</button>
                    <button className='w3-padding w3-dark-grey w3-hover-gray w3-border-0' style={{borderRadius:'10px', cursor: 'pointer'}}>Photo/Video</button>
                    <button className='w3-padding w3-dark-grey w3-hover-gray w3-border-0' style={{borderRadius:'10px', cursor: 'pointer'}}>Feeling/Activity</button>
                </div>
            </div>
        );
    }
}

export default Postt;