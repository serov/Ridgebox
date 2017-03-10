import React, { Component } from 'react';
import './team.css';


class TeamMember extends Component {

  render() {

    return (
      <div>
      	<img src={this.props.photo} />
      	<p className='teamname'>{this.props.name}<br /><span className='teamposition'>{this.props.position}</span></p>
      </div> 
    );
  }
}

export default TeamMember;
