import React, { Component } from 'react';
import { AiOutlineHistory } from 'react-icons/ai';

class SearchSuggestions extends Component {
    render() {
        return (
            <div id='sf'>
            <h4 id='sf'>Recent searches</h4>
                <p id='sf' style={{cursor:'pointer', borderRadius:'5px'}} className='w3-hover-gray w3-padding-small'><AiOutlineHistory/> ab cd</p>
                <p id='sf' style={{cursor:'pointer', borderRadius:'5px'}} className='w3-hover-gray w3-padding-small'><AiOutlineHistory/> ef gh</p>
                <p id='sf' style={{cursor:'pointer', borderRadius:'5px'}} className='w3-hover-gray w3-padding-small'><AiOutlineHistory/> hefv ufher</p>
                <p id='sf' style={{cursor:'pointer', borderRadius:'5px'}} className='w3-hover-gray w3-padding-small'><AiOutlineHistory/> hfr hvrv hv</p>
                <p id='sf' style={{cursor:'pointer', borderRadius:'5px'}} className='w3-hover-gray w3-padding-small'><AiOutlineHistory/> sncs cjjc</p>
                <p id='sf' style={{cursor:'pointer', borderRadius:'5px'}} className='w3-hover-gray w3-padding-small'><AiOutlineHistory/> ab cd</p>
            </div>
        );
    }
}

export default SearchSuggestions;