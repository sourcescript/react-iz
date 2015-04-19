var React = require('react');
var iz = require('iz');
var are = iz.are;
var validators = iz.validators;
var saveData = JSON.parse(localStorage.saveData || null) || {};

var Form = React.createClass({

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

    
    var usernameErrors = {
      required: 'this bitch is required!'
    };

    var passwordErrors = {
      required: 'this bitch is required!'
    };

    var rules = {
      username: iz(data.username, usernameErrors),
      password: iz(data.password, passwordErrors)
    };  

    console.log(rules);
    var areRules = are(rules);
    var success = areRules.valid();
    success ? this.saveData(data) : console.log('throw error');
  },

  saveData: function(data) {
    
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