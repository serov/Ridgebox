import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './videoSplash.css'; 
import ReactPlayer from 'react-player';
import splashVideo from './videobg.mp4';
import classNames from 'classnames';
import { browserHistory } from 'react-router';

class VideoSplash extends Component {
    // state = {
    //     visibility: true
    // }

    // hidePlayer = () => { 
    //     // this.state.visibility = false
    //     // this.setState({ visibility: false })
    // }

    render() {
        // const { visibility } = this.state;
        // const visibility = this.state.visibility;
        return (
            <div >
                {
                    <ReactPlayer className='overlay' onEnded={() =>browserHistory.push('/start')} url={splashVideo} playing width='100%' height='100%' />
                }
            </div>
        );
    }
}

export default VideoSplash;