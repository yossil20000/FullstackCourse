//https://developer.wordpress.org/coding-standards/inline-documentation-standards/javascript/
//https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch13s15.html

;(function ( yl, undefined ) {

    // private properties
    var foo = "foo", 
        bar = "bar";

    // public methods and properties
    yl.foobar = "foobar";
    yl.sayHello = function () {
        speak( "hello world" );
    };

    // private method
    function speak(msg) {
        console.log( "You said: " + msg );
    };

    // check to evaluate whether "namespace" exists in the 
    // global namespace - if not, assign window.namespace an 
    // object literal

}( window.yl = window.yl || {} ));

var myApp = myApp || {};
myApp.utils =  {};

(function () {
  var val = 5;

  this.getValue = function () {
      return val;
  };
   
  this.setValue = function( newVal ) {
      val = newVal;
  }
      
  // also introduce a new sub-namespace
  this.tools = {};
    
}).apply( myApp.utils ); 
// Usage:

// Outputs our populated namespace
console.log( myApp );

// Outputs: 5
console.log( myApp.utils.getValue() );

// Sets the value of `val` and returns it
myApp.utils.setValue( 25 ); 
console.log( myApp.utils.getValue() );

// inject new behaviour into the tools namespace
// which we defined via the utilities module

(function () {
    this.diagnose = function(){
        return "diagnosis";   
    }
}).apply( myApp.utils.tools );

console.log( myApp.utils.tools.diagnose() );