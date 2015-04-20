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
      height: 6,
      border: '1px solid red',
      marginTop: 10, 
      marginLeft: 10,
      display: 'inline'
    }
    console.log(errors);
    return (
      <form onSubmit={this.handleSubmit}> 
        { errors ? 
          <div>
            <span>Listed fields with errors</span>
            <ul>{ Object.keys(errors).map(function(key, i) {
              return <li key={i}>{ key }</li>
            }) }
            </ul>
          </div> : '' }      
        <div style={{ marginBottom: 10}}>
          <label> Username: </label> 
          <input type="text" valueLink={this.linkState('username')} style={{ border: errors.username ? '1px solid red' : '', width: 150 }} />
          {errors.username ?  <span style={errorMessage}>{ errors.username === 'required' ? 'Username is required' : 'Username should be ' + errors.username }</span> : ''}
        </div>

        <div style={{ marginBottom: 10}}>
          <label> Password: </label>
          <input type="password" valueLink={this.linkState('password')} style={{ border: errors.password ? '1px solid red' : '', width: 150 }} />
          {errors.password ?  <span style={errorMessage}>{ errors.password === 'required' ? 'Password is required' : 'Password should be ' + errors.password } </span> : ''} 
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
      username: iz(data.username).required().alphaNumeric(),
      password: iz(data.password).required().alphaNumeric()
    };

    var areRules = are(rules);
    this.setState({ errors: areRules.getInvalidFields() });
  }
});

React.render(
  <Form />,
  document.body
); 