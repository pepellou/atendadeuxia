var React = require('react');
var ReactDOM = require('react-dom');

/* 
  Catalog
  This will let us make <Catalog/>
*/

var Catalog = React.createClass({

  render : function() {
    return (
      <p>hello</p>
    )
  }
});


ReactDOM.render(<Catalog/>, document.querySelector('#main'));
