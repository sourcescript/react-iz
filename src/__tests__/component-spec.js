var React = require('react/addons');
var TestUtils = React.addons.TestUtils;


var ReactIz = require('../ReactIz');

describe('React Iz component', function() {
  describe('@props', function() {
    it('should throw a warning if the `rules` prop is undefined or not an array', function() {
        var ReactIz = TestUtils.renderIntoDocument(<ReactIz />);
        expect(this.props).to.equal(typeof this.props === 'undefined');
    });

    it('should throw a warning if the `render` method is undefined or not a function', function() {
        var ReactIz = TestUtils.renderIntoDocument(<ReactIz />);
    });

    it('should throw a warning if the the `data` method is not an object', function() {
        var ReactIz = TestUtils.renderIntoDocument(<ReactIz />);
    });
  });
  
  describe('#hasErrors', function() {
    it('should return true if any of the field has errors', function() {
      var ReactIz = TestUtils.renderIntoDocument(<ReactIz />);
      expect(this.hasErrors).toBe(true);
    });

    it('should return false if any of the field has errors', function() {
      var ReactIz = TestUtils.renderIntoDocument(<ReactIz />);
      expect(this.hasErrors).toBe(false);
    });
  });
  
  describe('#hasError', function() {
    it('should return true if a field has errors', function() {
      var ReactIz = TestUtils.renderIntoDocument(<ReactIz />);
      expect(this.hasError).toBe(true);
    });

    it('should return false if a field has errors', function() {
      var ReactIz = TestUtils.renderIntoDocument(<ReactIz />);
      expect(this.hasError).toBe(true);
    });
  });

  describe('#getError', function() {
    it('should return true if a field gets errors', function() {
      var ReactIz = TestUtils.renderIntoDocument(<ReactIz />);
      expect(this.getError).toBe(true);
    });

    it('should return false if a field gets errors', function() {
      var ReactIz = TestUtils.renderIntoDocument(<ReactIz />);
      expect(this.getError).toBe(false);
    });
  });

  describe('#getErrors', function() {
    it('should return true if any of the field gets errors', function() {
      var ReactIz = TestUtils.renderIntoDocument(<ReactIz />);
      expect(this.getErrors).toBe(true);
    });

    it('should return false if any of the field gets errors', function() {
      var ReactIz = TestUtils.renderIntoDocument(<ReactIz />);
      expect(this.getErrors).toBe(false);
    });
  });
  
  // describe('#getMessages', function() {
  //   it('should return the message of the field with error', function() {
  //     var ReactIz = TestUtils.renderIntoDocument(<ReactIz />);
  //     expect(this.getMessages).to.equal();
  //   });
  // });
});
