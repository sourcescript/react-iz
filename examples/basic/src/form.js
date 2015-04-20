var React = require('react/addons');
var LinkedStateMixin = React.addons.LinkedStateMixin;
var iz = require('iz');
var are = iz.are;
var validators = iz.validators;

var Form = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return { errors: false };
  },
  
  render: function() {
    var errors = this.state.errors;

    var errorMessage = {
      width: 10,
      height: 10,
      border: '1px solid red',
      marginTop: 10
    }
    return (
      <form onSubmit={this.handleSubmit}>
        {errors.username ?  <span style={errorMessage}>username is {errors.username} </span> : ''} 
        <div style={{ marginBottom: 10}}>
          <label> Username: </label> 
          <input type="text" valueLink={this.linkState('username')} style={{ border: errors.username ? '1px solid red' : '', width: 150 }} />
        </div>

        {errors.passowrd ?  <span style={errorMessage}>password is {errors.password} </span> : ''} 
        <div style={{ marginBottom: 10}}>
          <label> Password: </label>
          <input type="password" valueLink={this.linkState('password')} style={{ border: errors.password ? '1px solid red' : '', width: 150 }} />
        </div>

        <div style={{ marginBottom: 10}}>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();
    
    var data = {
      username: this.state.username,
      password: this.state.password
    };

    var rules = {
      username: iz(data.username, 'sir required').required(),
      password: iz(data.password, 'sir required').required()
    };

    var areRules = are(rules);
    this.setState({ errors: areRules.getInvalidFields() })
  }
});

React.render(
  <Form />,
  document.body
); 