var React = require('react');
var iz = require('iz');
var are = iz.are;
var validators = iz.validators;
var saveData = JSON.parse(localStorage.saveData || null) || {};

var Form = React.createClass({

  getInitialState: function() {
    return { click: !false };
  },

  render: function() {
    return (
      <form>
        <label> Username </label> 
        <input type="text" ref="username" />
        
        <label> Password </label>
        <input type="password" ref="password" />
        <button type="button" onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var data = {
      username: this.refs.username.getDOMNode().value,
      password: this.refs.password.getDOMNode().value
    };

    this.dataValidator(data);
  },

  dataValidator: function(data) {
    var usernameErrors = {
      alphaNumeric: 'Username should consist numbers and letters only!'
    };

    var passwordErrors = {
      alphaNumeric: 'Password should consist numbers and letters only!'
    };

    var rules = {
      username: iz(data.username, usernameErrors).required(),
      password: iz(data.password, passwordErrors).required()
    }

    var areRules = are(rules);
    var success = areRules.valid();
    success ? 'data is prepared for saving!' : 'throw error';
    
    saveData.data = data;
    saveData.time = new Date().getTime();
    localStorage.saveData = JSON.stringify(saveData);

    alert("Data is stored! Congratulations!!");
  }

});

React.render(
  <Form />,
  document.body
); 