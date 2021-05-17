import React, { Component } from 'react';

class Menu2 extends Component {
    render() {
        return (
            <div  className='w3-hover-gray pointer round' style={{height:'55px'}}>
                <div className='' style={{display:'grid', gridTemplateColumns:'50px auto', alignContent:'center', marginLeft:'8px'}}>
                    <img style={{marginTop:'6px'}} src={this.props.src} width='40px' height='40px' alt='' className='round5'/>
                    <div>
                        <h5 style={{marginTop:'2px'}}>{this.props.name}</h5>
                        <p style={{marginTop:'-8px'}}><span style={{color:'green'}}>{this.props.amount} new videos</span></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu2;