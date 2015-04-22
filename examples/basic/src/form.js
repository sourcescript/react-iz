var React = require('react');
var ReactIz = require('../../src/ReactIz');

var rules = {
  'username': [
    { 'rule': 'required' },
    { 'rule': 'alphaNumeric' }
  ],
  'password': [
    { 'rule': 'required' },
    { 'rule': 'alphaNumeric' }
  ]
};

var Example = React.createClass({
  getInitialState: function() {
    return {};
  }
  render: function() {
    <ReactIz data={this.state} rules={rules} render{(props) => {
      return (
        <form onChange={this.handleValidation}>
          <label> Username </label>
          { this.hasErrors() ? <div>Please kindly fix the errors</div> : '' }
          <input type="text" valueLink={this.linkState('username')} />
          { this.hasError('username') ? <div> { this.getError('username') }</div> : '' }
          
          <label> Password </label>
          <input type="password" valueLink={this.linkState('password')} />
          { this.hasError('password') ? <div> { this.getError('password') }</div> : '' }
        </form>
      );
    }} />
  }


});


React.render(
  <Example />,
  document,body
);