describe('React Iz component', function() {
  describe('@props', function() {
    it('should throw a warning if the `rules` prop is undefined or not an array');
    it('should throw a warning if the `render` method is undefined or not a function');
    it('should throw a warning if the the `data` method is not an object');
  });
  
  describe('#hasErrors', function() {
    it('should return true if any of the field has errors');
    it('should return false if any of the field has errors');
  });
  
  describe('#hasError', function() {
    it('should return true if a field has errors');
    it('should return false if a field has errors');
  });
  
  describe('#getMessages', function() {
    it('should return the message of the field with error');
  });
});
