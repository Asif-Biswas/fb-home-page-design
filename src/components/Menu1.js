import React, { Component } from 'react';

class Menu1 extends Component {
    render() {
        return (
            <div>
            <div className='w3-hover-dark-gray w3-margin-right w3-padding pointer' style={{borderRadius:'10px'}}>
            
                <img src={this.props.src} width='30px' alt=''/>
                <p style={{display:'inline', paddingLeft:'8px'}}>{this.props.name}</p>
            
            </div>
            </div>
        );
    }
}

export default Menu1;