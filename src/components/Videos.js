import React, { Component } from 'react';
import { MdOndemandVideo } from 'react-icons/md';
import {SiFacebooklive} from 'react-icons/si';
import {VscSave} from 'react-icons/vsc';
import {GiFilmProjector} from 'react-icons/gi';
import ayman from '../images/ayman.jpg'
import elon from '../images/elon.jpg'
import jeffbezos from '../images/jeffbezos.jpg'
import mark from '../images/mark.jpg'
import Menu2 from './Menu2';
import VideoContainer from './VideoContainer';

class Videos extends Component {
    render() {
        return (
            <div className='w3-container'>
                <div style={{}} className='video'>
                    
                    <div style={{}} className='hvh scrolly hide-small hide-medium'>
                        <h3>Watch</h3>
                        <input type='text' placeholder='Search videos' style={{height:'30px'}} className='w3-container w3-border-0 round2'/>
                        <br/><br/>
                        <a href=''>
                        <div className='w3-hover-grey round'>
                            <div className='flex pc' style={{marginLeft:'12px'}}>
                            <MdOndemandVideo className='left-middle' style={{fontSize:'24px'}}/>
                            <h5 style={{marginLeft:'40px'}}>Home</h5>
                            </div>
                        </div></a>
                        <a href=''>
                        <div className='w3-hover-grey round'>
                            <div className='flex pc' style={{marginLeft:'12px'}}>
                            <GiFilmProjector className='left-middle' style={{fontSize:'24px'}}/>
                            <h5 style={{marginLeft:'40px'}}>Show</h5>
                            </div>
                        </div></a>

                        <a href=''>
                        <div className='w3-hover-grey round'>
                            <div className='flex pc' style={{marginLeft:'12px'}}>
                            <SiFacebooklive className='left-middle' style={{fontSize:'24px'}}/>
                            <h5 style={{marginLeft:'40px'}}>Live</h5>
                        </div></div></a>
                        <a href=''>
                        <div className='w3-hover-grey round'>
                        <div className='flex pc' style={{marginLeft:'12px'}}>
                            <VscSave className='left-middle' style={{fontSize:'24px'}}/>
                            <h5 style={{marginLeft:'40px'}}>Saved</h5>
                        </div></div></a>

                        <hr style={{height:'1px'}}/>
                        <h5>Your Watchlist</h5>
                        <Menu2 src={ayman} name='Ayman Sadiq' amount='4'/>
                        <Menu2 src={elon} name='Elon Musk' amount='9+'/>
                        <Menu2 src={jeffbezos} name='Jeff Bezos' amount='1'/>
                        <Menu2 src={mark} name='Mark Juckerberg' amount='6'/>

                        <Menu2 src={ayman} name='Ayman Sadiq' amount='4'/>
                        <Menu2 src={elon} name='Elon Musk' amount='9+'/>
                        <Menu2 src={jeffbezos} name='Jeff Bezos' amount='1'/>
                        <Menu2 src={mark} name='Mark Juckerberg' amount='6'/>

                        <Menu2 src={ayman} name='Ayman Sadiq' amount='4'/>
                        <Menu2 src={elon} name='Elon Musk' amount='9+'/>
                        <Menu2 src={jeffbezos} name='Jeff Bezos' amount='1'/>
                        <Menu2 src={mark} name='Mark Juckerberg' amount='6'/>


                    </div>
                    <div style={{}} className='hvh'>
                    <h3>Top Videos for You</h3>
                    <VideoContainer src={ayman} name='Ayman Sadiq' date='November 17 at 5:56 pm' text='Dreams to Reality' vsrc='https://www.youtube.com/embed/iemLegYEiu8'/>
                    <VideoContainer src={ayman} name='Ayman Sadiq' date='November 17 at 5:56 pm' text='Dreams to Reality' vsrc='https://www.youtube.com/embed/iemLegYEiu8'/>
                    <VideoContainer src={ayman} name='Ayman Sadiq' date='November 17 at 5:56 pm' text='Dreams to Reality' vsrc='https://www.youtube.com/embed/iemLegYEiu8'/>
                    <VideoContainer src={ayman} name='Ayman Sadiq' date='November 17 at 5:56 pm' text='Dreams to Reality' vsrc='https://www.youtube.com/embed/iemLegYEiu8'/>
                    <VideoContainer src={ayman} name='Ayman Sadiq' date='November 17 at 5:56 pm' text='Dreams to Reality' vsrc='https://www.youtube.com/embed/iemLegYEiu8'/>

                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Videos;