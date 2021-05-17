import React, { Component } from 'react';

class VideoContainer extends Component {
    render() {
        return (
            <div className='video4' style={{marginBottom:'16px'}}>
            <div className='video3 round1 w3-card w3-dark-gray'>
            <div style={{paddingTop:'8px'}} className='container'>
                <div style={{display:'grid', gridTemplateColumns:'60px auto 20px', alignContent:'center'}}>
                    <img className='round5 pointer' src={this.props.src} alt='' width='50px' height='50px'/>
                    <div>
                        <h5 style={{marginTop:'-4px'}}><span className='pointer'>{this.props.name}</span></h5>
                        <p style={{marginTop:'-10px'}}><span className='pointer'>{this.props.date}</span></p>
                    </div>
                    <p className='pointer'>...</p>
                </div>
                <p>{this.props.text}</p>
                
                <iframe title='video' width='100%' height='400px' src={this.props.vsrc}></iframe>
                
                <div style={{display:'grid', gridTemplateColumns:'auto auto'}}>
                    <div style={{display:'flex', height:'30px', alignItems:'center'}}>
                        <button style={{border:'none', marginLeft:'8px'}} className='round w3-hover-gray w3-dark-gray'>Like</button>
                        <button style={{border:'none', marginLeft:'8px'}} className='round w3-hover-gray w3-dark-gray'>Comment</button>
                        <button style={{border:'none', marginLeft:'8px'}} className='round w3-hover-gray w3-dark-gray'>Share</button>
                    </div>
                    <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'16px'}}>
                        <p style={{marginTop:'0px'}}>omuk, omuk and 223 others. 23 Comments</p>
                    </div>
                </div>
            </div>    
            </div>
            </div>
        );
    }
}

export default VideoContainer;