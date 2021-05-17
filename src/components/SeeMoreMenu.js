import React, { Component } from 'react';
import Menu1 from './Menu1';
import saved from '../images/saved.png'
import memo from '../images/memo.png'
import messenger from '../images/messenger.png'
import job from '../images/job.png'
import friendlist from '../images/friendlist.png'
import gamr from '../images/gamr.png'
import crisis from '../images/crisis.png'
import livevideo from '../images/livevideo.png'
import note from '../images/note.png'

class SeeMoreMenu extends Component {
    render() {
        return (
            <div>
                <Menu1 src={crisis} name='Crisis Response'/>
                <Menu1 src={livevideo} name='Live videos'/>
                <Menu1 src={gamr} name='Games'/>
                <Menu1 src={friendlist} name='Friend list'/>
                <Menu1 src={job} name='Jobs'/>
                <Menu1 src={messenger} name='Messenger'/>
                <Menu1 src={memo} name='Memories'/>
                <Menu1 src={saved} name='Saved'/>
                <Menu1 src={note} name='Notes'/>
            </div>
        );
    }
}

export default SeeMoreMenu;