import React, {Component} from 'react';
import './myProfile.less';
import 'bootstrap/dist/css/bootstrap.css'

class MyProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: 'male',
      description: 'Description about yourself',
      agreement: false,
    }
  }

  handleEvent = (event) => {
    let attrName = event.target.name;
    this.setState({
      [attrName]: event.target.value
    });
  }

  handleCheckBox = (event) => {
    let attrName = event.target.name;
    if (event.target.checked) {
      this.setState({
        [attrName]: true
      });
    } else {
      this.setState({
        [attrName]: false
      });
    }
  }

  printState = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  areAllFilled = () => {
    let values = Object.values(this.state);
    for(let value of values) {
      if (value == '' || value == "false") {
        return false;
      }
    }
    return true;
  }


  render() {
    return (
      <form>
        <h1>My Profile</h1>
        <label>Name</label>
        <br/>
        <input id="name" type="text" name="name" onChange={this.handleEvent} placeholder="Your name"/>
        <br/>
        <label>Gender</label>
        <br/>
        <select id="gender" name="gender" name="gender" onChange={this.handleEvent}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br/>
        <label>Decription</label>
        <br/>
        <textarea id="description" name="description" onChange={this.handleEvent} placeholder="Description about yourself"/>
        <br/>
        <div>
          <input id="agreement" type="checkbox" name="agreement" onClick={this.handleCheckBox} checked={this.state.agreement}/>
          <label id="agreementLabel" htmlFor="agreement">I have read the terms of conduct</label>
        </div>
        <br/>
        <button class="btn btn-primary" onClick={this.printState} disabled={this.areAllFilled() ? false:true}>Submit</button>
      </form>
    );
  }
}

export default MyProfile;


