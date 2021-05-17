import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import l from '../images/images.png'
import logo from '../images/facebook.png'
import { FaFacebookMessenger } from "react-icons/fa";
import { AiFillHome, AiOutlineArrowLeft, AiOutlineMenu, AiOutlineShop } from "react-icons/ai";
import { MdOndemandVideo } from 'react-icons/md'
import { TiGroup } from 'react-icons/ti'
import { BsPlusCircleFill } from 'react-icons/bs'
import { RiSearchLine } from "react-icons/ri";
import { IoLogoGameControllerB, IoMdArrowDropdown, IoMdNotifications } from 'react-icons/io'
import SearchSuggestions from './SearchSuggestions';
import Col1 from './Col1';


class Navigation extends Component {
    constructor(){
        super()
        this.state={
            hide: true,
            ss: false,
            more: false,
            create: false,
            messenger: false,
            notification: false,
            account: false
        }
    }

    create=()=>{
        this.setState({
            create:!this.state.create,
            messenger: false,
            notification: false,
            account: false,
            more: false
        })

        /*window.onclick = (event)=>{
            if(event.target.id !== 'c'){
                this.setState({create:false})
            }
            
        }*/
    }

    messenger=()=>{
        this.setState({
            create: false,
            messenger: !this.state.messenger,
            notification: false,
            account: false,
            more: false
        })
    }

    notification=()=>{
        this.setState({
            create: false,
            messenger: false,
            notification: !this.state.notification,
            account: false,
            more: false
        })
    }

    account=()=>{
        this.setState({
            create: false,
            messenger: false,
            notification: false,
            account: !this.state.account,
            more: false
        })
    }

    handleClick=()=>{
        this.setState({
            hide: !this.state.hide
        })
    }

    ss=()=>{
        this.setState({ss: !this.state.ss})
    }

    more=()=>{
        this.setState({
            more: !this.state.more,
            create: false,
            messenger: false,
            notification: false,
            account: false
        })
    }

    render() {
        window.onclick=(event)=>{
            if(event.target.id !== 'sf'){
                this.setState({ss: false})
            }
        }
        return (
            <div>
            <div className='w3-bar w3-dark-grey w3-row w3-top w3-card'>
            <span className='w3-col l3 m2 s3'>
                
                <Link to='/' className='w3-bar-item' style={{marginLeft:'-5px'}}>
                    <img style={{borderRadius: '50%', margin:'-3px'}} src={logo} width='40px' alt='logo'/>
                    
                </Link>
                <span className='w3-bar-item w3-hide-medium w3-hide-small' >
                    <input onClick={this.ss} id='sf' className='w3-gray w3-border-0' style={{borderRadius:'30px', height:'35px', width:'150px', marginLeft:'-15px', textAlign:'center'}} type='text' placeholder='Search Facebook' />
                </span>
                <Link className='w3-bar-item w3-hover-black w3-center w3-hide-large' style={{fontSize:'30px', margin:'-4px', borderRadius:'20%', marginLeft:'-20px'}}>
                    <RiSearchLine style={{marginBottom:'-4px'}} onClick={this.handleClick}/>
                </Link>
                
            </span>
            <span className='w3-col l6 m6 s3'>
                <Link to='/' className='w3-bar-item w3-hover-black w3-center w3-hide-small' style={{fontSize:'30px', margin:'-4px', width:'20%', borderRadius:'20%'}}>
                    <AiFillHome style={{marginBottom:'-4px'}}/>
                </Link>
                <Link to='/videos' className='w3-bar-item w3-hover-black w3-center w3-hide-small' style={{fontSize:'30px', margin:'-4px', width:'20%', borderRadius:'20%'}}>
                    <MdOndemandVideo style={{marginBottom:'-4px'}}/>
                </Link>
                <Link to='/marketplaces' className='w3-bar-item w3-hover-black w3-center w3-hide-small' style={{fontSize:'30px', margin:'-4px', width:'20%', borderRadius:'20%'}}>
                    <AiOutlineShop style={{marginBottom:'-4px'}}/>
                </Link>
                <Link to='/groups' className='w3-bar-item w3-hover-black w3-center w3-hide-small' style={{fontSize:'30px', margin:'-4px', width:'20%', borderRadius:'20%'}}>
                    <TiGroup style={{marginBottom:'-4px'}}/>
                </Link>
                <Link className='w3-bar-item w3-hover-black w3-center w3-hide-small w3-hide-medium' style={{fontSize:'30px', margin:'-4px', width:'20%', borderRadius:'20%'}}>
                    <IoLogoGameControllerB style={{marginBottom:'-4px'}}/>
                </Link>
                <Link onClick={this.more} className='w3-bar-item w3-hover-black w3-center w3-hide-large' style={{fontSize:'30px', margin:'-4px', borderRadius:'20%'}}>
                    <AiOutlineMenu style={{marginBottom:'-4px'}} onClick={this.more}/>
                </Link>
            </span>
            <div style={{display:'flex', justifyContent:'space-around'}} className='w3-col l3 m4 s6'>
                <Link id='c' className='w3-bar-item w3-hover-black w3-center w3-hide-medium w3-hide-small' style={{ margin:'-8px',width:'20%'}}>
                    <p id='c'>Asif</p>
                </Link>
                <Link id='c' className='w3-bar-item w3-hover-black w3-center' style={{fontSize:'30px', margin:'-4px', width:'20%'}}>
                    <BsPlusCircleFill style={{marginBottom:'-4px', marginLeft:'-10px'}} id='c' onClick={this.create}/>
                </Link>
                <Link id='c' className='w3-bar-item w3-hover-black w3-center' style={{fontSize:'30px', margin:'-4px', width:'20%'}}>
                    <FaFacebookMessenger style={{marginBottom:'-4px', marginLeft:'-10px'}} id='c' onClick={this.messenger}/>
                </Link>
                <Link id='c' className='w3-bar-item w3-hover-black w3-center' style={{fontSize:'30px', margin:'-4px', width:'20%'}}>
                    <IoMdNotifications style={{marginBottom:'-4px', marginLeft:'-10px'}} id='c' onClick={this.notification}/>
                </Link>
                <Link id='c' className='w3-bar-item w3-hover-black w3-center' style={{fontSize:'30px', margin:'-4px', width:'20%'}}>
                    <IoMdArrowDropdown style={{marginBottom:'-4px', marginLeft:'-10px'}} id='c' onClick={this.account}/>
                </Link>
            </div>
            </div>
            
            {this.state.hide?(null)
                :(
                    <div style={{float:'left', width:'300px', height:'600px', zIndex:'10'}}
                     className='w3-display-topleft w3-dark-grey w3-container'>
                    <div className='w3-animate-left'>
                    <div style={{display:'flex'}}>
                    <AiOutlineArrowLeft className='w3-hover-gray' onClick={this.handleClick} style={{fontSize:'24px', borderRadius:'10px', margin:'16px'}}/>
                    <div style={{margin:'16px 0 0 0'}}>
                        <input id='sf' className='w3-gray w3-border-0' style={{borderRadius:'30px', height:'35px', width:'200px', textAlign:'center'}} type='text' placeholder='Search Facebook' />
                    </div>
                    </div>
                    <SearchSuggestions/>
                    </div>
                    
                    </div>
                )}

            {this.state.create?(
                <div className='w3-dark-gray w3-card-4 w3-display-container w3-container'
                style={{right:'12px', top:'16px', marginTop:'30px', zIndex:'10', position:'absolute', width:'350px', height:'600px'}}>
                <h2 style={{}}>Create</h2>
                <h2 style={{margin:'0 10px 0 0', cursor:'pointer'}} onClick={this.create} className='w3-hover-text-blue w3-display-topright' >x</h2>
                </div>
            )
            :(
                null)}

                {this.state.messenger?(
                <div className='w3-dark-gray w3-card-4 w3-display-container w3-container'
                style={{right:'12px', top:'16px', marginTop:'30px', zIndex:'10', position:'absolute', width:'350px', height:'600px'}}>
                <h2 style={{}}>Messages</h2>
                <h2 style={{margin:'0 10px 0 0', cursor:'pointer'}} onClick={this.messenger} className='w3-hover-text-blue w3-display-topright' >x</h2>
                </div>
            )
            :(
                null)}

                {this.state.notification?(
                <div className='w3-dark-gray w3-card-4 w3-display-container w3-container'
                style={{right:'12px', top:'16px', marginTop:'30px', zIndex:'10', position:'absolute', width:'350px', height:'600px'}}>
                <h2 style={{}}>Notification</h2>
                <h2 style={{margin:'0 10px 0 0', cursor:'pointer'}} onClick={this.notification} className='w3-hover-text-blue w3-display-topright' >x</h2>
                </div>
            )
            :(
                null)}

                {this.state.account?(
                <div className='w3-dark-gray w3-card-4 w3-display-container w3-container'
                style={{right:'12px', top:'16px', marginTop:'30px', zIndex:'10', position:'absolute', width:'350px', height:'600px'}}>
                <h2 style={{}}>Account</h2>
                <h2 style={{margin:'0 10px 0 0', cursor:'pointer'}} onClick={this.account} className='w3-hover-text-blue w3-display-topright' >x</h2>
                </div>
            )
            :(
                null)}

            {this.state.ss?(
                <div className='w3-dark-gray w3-display-container w3-container'
                style={{marginTop:'50px', zIndex:'10', position:'absolute', width:'350px'}}>
                <SearchSuggestions/>
                </div>
            ):(
                null
            )}

            {this.state.more?(
                <div className='w3-dark-gray w3-card-4 w3-display-container w3-container'
                style={{right:'24px', top:'16px', marginTop:'30px', zIndex:'10', position:'absolute', width:'350px', overflow:'scroll', height: '90vh'}}>
                
                <Col1/>

                <h2 style={{margin:'0 40px 0 0', cursor:'pointer'}} onClick={this.more} className='w3-hover-text-blue w3-display-topright'><span className='w3-red' style={{position:'absolute', padding:'8px', border:'red solid 1px'}}>x</span></h2>
                </div>
                /*<p style={{zIndex:'10', color:'green'}}>hh<br/>h</p>*/
            )
            :(
                null)}

                <br/><br/><br/>
            </div>
        );
    }
}

export default Navigation;