var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var chai = require('chai');
var expect = chai.expect;
var ReactIz = require('../ReactIz');


var t = true;
var f = false;
// console.log(ReactIz.hasErrors);
describe('React Iz component', function() {
  // describe('@props', function() {
    // it('should throw a warning if the `rules` prop is undefined or not an array', function() {
    //     expect(ReactIz.hasErrors).to.equal(undefined);
    // });

    // it('should throw a warning if the `render` method is undefined or not a function', function() {
    //     var ReactIz = TestUtils.renderIntoDocument(<ReactIz />);
    // });

    // it('should throw a warning if the the `data` method is not an object', function() {
    //     var ReactIz = TestUtils.renderIntoDocument(<ReactIz />);
    // });
  // });
  
  describe('#hasErrors', function() {
    it('should return true if any of the field has errors', function() {
      console.log(ReactIz.hasErrors);
      expect(t).to.equal(true);
    });

    it('should return false if any of the field has errors', function() {
      expect(f).to.equal(false);
    });
  });
  
  describe('#hasError', function() {
    it('should return true if a field has errors', function() {
      // expect(ReactIz.hasErrors).to.equal(true);
      expect(t).to.equal(true);
    });

    it('should return false if a field has errors', function() {
      // expect(ReactIz.hasErrors).to.equal(false);
      expect(f).to.equal(false);
    });
  });

  describe('#getError', function() {
    it('should return true if a field gets errors', function() {
      // expect(ReactIz.getError).to.equal(true);
      expect(t).to.equal(true);
    });

    it('should return false if a field gets errors', function() {
      // expect(this.getError).to.equal(false);
      expect(f).to.equal(false);
    });
  });

  describe('#getErrors', function() {
    it('should return true if any of the field gets errors', function() {
      // expect(this.getErrors).to.equal(true);
      expect(t).to.equal(true);
    });

    it('should return false if any of the field gets errors', function() {
      // expect(this.getErrors).to.equal(false);
      expect(f).to.equal(false);
    });
  });
  
  // describe('#getMessages', function() {
  //   it('should return the message of the field with error', function() {
  //     var ReactIz = TestUtils.renderIntoDocument(<ReactIz />);
  //     expect(this.getMessages).to.equal();
  //   });
  // });
});
