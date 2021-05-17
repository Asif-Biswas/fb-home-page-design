import React, { Component } from 'react';
import Menu1 from './Menu1';
import ad from '../images/ad.png'
import covidcare from '../images/covidcare.png'
import eventt from '../images/event.png'
import friend from '../images/friend.png'
import marketplace from '../images/marketplace.png'
import videos from '../images/videos.png'
import { IoMdArrowDropdown } from 'react-icons/io';
import SeeMoreMenu from './SeeMoreMenu';
import { Link } from 'react-router-dom';


class Col1 extends Component {
    constructor(){
        super()
        this.state={
            seeMore: false,
            see: true
        }
    }

    handleClick=()=>{
        this.setState({seeMore:!this.state.seeMore, see: !this.state.see})
    }


    render() {
        return (
            <div>
                
                <Menu1 src={covidcare} name='COVID-19 Information Center'/>
                <Menu1 src={eventt} name='Event'/>
                <Menu1 src={friend} name='Friend'/>
                <Menu1 src={marketplace} name='Marketplace'/>
                <Link to='/videos'>
                    <Menu1 src={videos} name='Videos'/>
                </Link>
                <Menu1 src={ad} name='Ad center'/>
                
                {/*<Menu1 src={} name=''/>*/}
                {this.state.seeMore?(
                    <SeeMoreMenu/>
                    )
                :(null)}
                <button onClick={this.handleClick} className='w3-black w3-padding w3-hover-dark-gray' style={{border:'none', cursor: 'pointer', borderRadius:'5%'}}>
                    <IoMdArrowDropdown style={{fontSize:'20px'}}/>
                    <p style={{display:'inline'}}>See {this.state.see?(<span>more</span>):(<span>less</span>)}</p>
                </button>
                    
                </div>


                
        );
    }
}

export default Col1;