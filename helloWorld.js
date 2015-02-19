'use strict';

module.exports = function(event, done) {

  return 
    Hoist.log("Hello World! Congratulations, you've just fired your first Hoist event.")
    .then(done);
    // .then(function() {
    //   return Hoist.log("To keep learning checkout out our tutorial at hoist.io/tutorial");
    // })
    // .then(function() {
    //   return Hoist.log("Get this apps source code at github.com/hoist/hoist-sample-app");
    // })


};