import React, { Component } from 'react';
import Col1 from './Col1';
import FriendRequest from './FriendRequest';
import { FaBirthdayCake } from "react-icons/fa";
import ActiveFriend from './ActiveFriend';
import elon from '../images/elon.jpg'
import billgates from '../images/billgates.jpg'
import jeffbejos from '../images/jeffbezos.jpg'
import StoryContainer from './StoryContainer';
import Postt from './Postt';
import asif from '../images/asif.jpg';
import Status from './Status';
import { AiFillHome } from 'react-icons/ai';
import { MdOndemandVideo } from 'react-icons/md';


//import  from '../images/.png'
//import  from '../images/.png'

class Body extends Component {
    
    
    render() {
        return (
            <div className=' w3-row'>
            <div className='w3-col l3 w3-hide-medium w3-hide-small' style={{overflow:'scroll', height: '90vh'}}>
                <Col1/><hr/>
                <h3 className='w3-container'>Facebook clone<br/>(Home <AiFillHome/> and Videos <MdOndemandVideo/> ui page)</h3>
            </div>
                <div className='w3-col l6 m7 w3-container' style={{marginTop:'-16px', backgroundColor:'rgb(70,70,70)', overflow:'scroll', height: '100vh'}}>
                    <StoryContainer/>
                    <br/>
                    <Postt mypp={asif}/>
                    <Status body={'Resize your browser window or Rotate your phone to see how Responsive this web page is.'}/>
                    <Status body={'Go to "Videos" section, some content is also there.'}/>
                    <Status body={'Go to "Videos", some content is also there.'}/>
                    <Status body={'Click to the search button.'}/>
                    <Status body={'Thanks for visiting this site.'}/>
                </div>


                <div className='w3-col l3 m5 w3-black w3-container w3-hide-small'  style={{overflow:'scroll', height: '97vh'}}>
                    <FriendRequest/>
                    <hr/>

                    <div className='w3-hover-gray w3-container' style={{borderRadius:'10px'}}>
                    <div className='w3-padding-small' >
                    <div style={{textDecoration:'none', cursor:'pointer'}}>
                        <p>Birthdays</p>
                        <div className='w3-row'>
                            <FaBirthdayCake style={{width:'15%', fontSize:'30px'}} className='w3-col'/>
                            <span style={{width: '85%', paddingLeft:'8px'}} className='w3-col'><span className='w3-hover-text-white'>Kazi Mostafizur Rahman Topu</span> and 2 others have birthdays today.</span>
                        </div>
                    </div>
                    </div>
                    </div>

                    <hr/>
                    <div className='w3-container'>
                    <p className='w3-container'>Contacts</p>
                    <ActiveFriend src={elon} name='Elon Musk'/>
                    <ActiveFriend src={billgates} name='Bill Gates'/>
                    <ActiveFriend src={jeffbejos} name='Jeff Bejos'/>

                    <ActiveFriend src={elon} name='Elon Musk'/>
                    <ActiveFriend src={billgates} name='Bill Gates'/>
                    <ActiveFriend src={jeffbejos} name='Jeff Bejos'/>

                    <ActiveFriend src={elon} name='Elon Musk'/>
                    <ActiveFriend src={billgates} name='Bill Gates'/>
                    <ActiveFriend src={jeffbejos} name='Jeff Bejos'/>

                    <ActiveFriend src={elon} name='Elon Musk'/>
                    <ActiveFriend src={billgates} name='Bill Gates'/>
                    <ActiveFriend src={jeffbejos} name='Jeff Bejos'/>

                    <ActiveFriend src={elon} name='Elon Musk'/>
                    <ActiveFriend src={billgates} name='Bill Gates'/>
                    <ActiveFriend src={jeffbejos} name='Jeff Bejos'/>

                    <ActiveFriend src={elon} name='Elon Musk'/>
                    <ActiveFriend src={billgates} name='Bill Gates'/>
                    <ActiveFriend src={jeffbejos} name='Jeff Bejos'/>

                    <ActiveFriend src={elon} name='Elon Musk'/>
                    <ActiveFriend src={billgates} name='Bill Gates'/>
                    <ActiveFriend src={jeffbejos} name='Jeff Bejos'/>

                </div>
                </div>
            </div>
        );
    }
}

export default Body;