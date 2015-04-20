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
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Username </label> 
        <input type="text" valueLink={this.linkState('username')} style={{ border: errors.username ? '1px solid red' : '' }} />
        
        <label> Password </label>
        <input type="password" valueLink={this.linkState('password')} style={{ border: errors.password ? '1px solid red' : '' }} />
        
        <button type="submit">Submit</button>
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