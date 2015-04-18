var iz = require('iz');
var are = iz.are;
var validators = iz.validators;
var React = require('react');

var ReactIz = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired,
    rules: React.PropTypes.object.isRequired,
    render: React.PropTypes.func.isRequired
  },
  
  render: function() {
    return this.render({
      hasError: this.hasError,
      hasErrors: this.hasErrors,
      getMessages: this.getMessages
    });
  },

  hasError: function(field) {
    return are(this.props.rules)
      .validFor(this.props.data)
        .valid
          .indexOf(field) == -1;
  },

  hasErrors: function() {
    return are(this.props.rules)
      .validFor(this.props.data)
        .valid
          .length == this.props.data.length;
  },

  getError: function(field) {
    return are(this.props.rules)
      .validFor(this.props.data)
        .errors[field];
  },

  getErrors: function() {
    return are(this.props.rules)
      .validFor(this.props.data)
        .errors;
  }
});