var React = require('react/addons');
var LinkedStateMixin = React.addons.LinkedStateMixin;
var ReactIz = require('../../../src/ReactIz');

var rules = {
  'username': [
    { 'rule': 'required', 'error': 'Username is required' },
    { 'rule': 'alphaNumeric', 'error': 'Username should consist of numbers and letters' }
  ],
  'password': [
    { 'rule': 'required', 'error': 'Password is required' },
    { 'rule': 'alphaNumeric', 'error': 'Password should consist of numbers and letters' }
  ]
};

var Example = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {};
  },

  render: function() {
    return (<ReactIz data={this.state} rules={rules} render={ (props) => {
      return (
        <form onSubmit={(evt) => { evt.preventDefault(); props.handleValidation() }}>
          { props.hasErrors() ? <div>Please kindly fix the errors</div> : '' }

          <label> Username: </label>
          <input type="text" valueLink={this.linkState('username')} style={{display: 'block'}}/>
          { props.hasError('username') ? <div style={{border: '1px solid red', width: 158}}> { props.getError('username') }</div> : '' }
          
          <label> Password: </label>
          <input type="password" valueLink={this.linkState('password')} style={{display: 'block'}}/>
          { props.hasError('password') ? <div style={{border: '1px solid red', width: 158}}> { props.getError('password') }</div> : '' }

          <button type="submit">Submit</button>
        </form>
      );
    }} />
  );
  }
});


React.render(
  <Example />,
  document.body
);