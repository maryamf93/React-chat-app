import React from 'react'
import photo from '../../photo.jpg'

class EditProfile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
			lastName: '',
			bio: ''
  	}
	}
	
  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(
      { [name] : value }
    );
      console.log(event.target.value);
    }
     
    onClick = (event) => {
			console.log ('this is', this)
		}

    render() {
      return (
				<div className = 'container' >
          <h1>
            Edit Profile
          </h1>
          <img className = 'pro-img-box profile' src={photo} />
        	<input 
            className = 'input-box' 
            type = 'text' 
            name = 'firstName'
          	placeholder = 'First Name'
            value = {this.state.firstName}
            onChange = {this.onChange}
          />
          <input 
          	className = 'input-box' 
            type = 'text' 
            name = 'lastName'
            placeholder = 'Last Name'
            value = {this.state.lastName}
            onChange = {this.onChange}          
          />
					<input 
          	className = 'input-box' 
            type = 'text' 
            name = 'bio'
            placeholder = 'Bio'
            value = {this.state.bio}
            onChange = {this.onChange}          
          />
					<button 
						className = 'submit input-box' 
						onClick = {this.onClick}
					>
          	Submit
          </button>
        </div>
      );
    }
}

export default EditProfile
