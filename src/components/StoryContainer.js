import React, { Component } from 'react';
import Story from './Story';
import kazistory from '../images/images-5.jpeg'
import kazi from '../images/kazi.jpg'
import asif from '../images/asif.jpg'
import elon from '../images/elon.jpg'
import billgates from '../images/billgates.jpg'
import jeffbejos from '../images/jeffbezos.jpg'
import { BsPlusCircleFill } from 'react-icons/bs';
import { FaArrowCircleRight } from 'react-icons/fa';
import images1 from '../images/images1.jpeg'
import images2 from '../images/images-2.jpeg'
import images3 from '../images/images-3.jpeg'
import images4 from '../images/images-4.jpeg'

class StoryContainer extends Component {

    render() {

        return (
            <div className='w3-card-4' style={{width:'auto', overflow:'scroll', borderRadius:'10px', display:'flex'}}>
                <div style={{cursor:'pointer'}} >
                    <div className='w3-card w3-border w3-display-container w3-hover-opacity w3-black' 
                        style={{height:'150px', width:'100px', borderRadius:'10px', margin:'20px 8px 20px 8px'}}>
                
                        <div className='w3-display-top'>
                            <img style={{maxWidth:'96px', maxHeight:'140', borderRadius:'10px 10px 0 0'}} className='' src={asif} alt='' />
                        </div>
                        <div style={{marginTop:'-10px', display:'flex', justifyContent:'center'}}>
                        <BsPlusCircleFill style={{fontSize:'24px'}}/>
                    </div>
                    <p className='w3-center' style={{marginTop:'-1px', lineHeight:'1',}}>Create a story</p>

                </div>
                
                </div>
                
                <div>
                    <Story src={images1} pp={billgates} name={'Bill Gates'}/>
                </div>
                <div>
                    <Story src={images2} pp={elon} name={'Elon Musk'}/>
                </div>
                <div>
                    <Story src={images3} pp={jeffbejos} name={'Jeff Bezos'}/>
                </div>
                <div>
                    <Story src={images4} pp={asif} name={'Kayes Sheikh'}/>
                </div>
                <div>
                    <Story src={kazistory} pp={kazi} name={'Kazi Topu'}/>
                </div>
                

                <div>
                <FaArrowCircleRight style={{marginTop:'80px', fontSize:'30px'}}/>
                </div>
            </div>
        );
    }
}

export default StoryContainer;