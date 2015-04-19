var React = require('react');
var iz = require('iz');
var are = iz.are;
var validators = iz.validators;

var Form = React.createClass({

  getInitialState: function() {
    return { null };
  },

  render: function() {
    return (
      <form> 
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button type="button">Submit</button>
      </form>
    );
  },

  handleSubmit: function() {

  }

});

React.render(
  <Form />,
  document.body
);