var React = require('react');
var ReactDOM = require('react-dom');

/* 
  Catalog
  This will let us make <Catalog/>
*/

var Catalog = React.createClass({

  render : function() {
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" required />
        <input type="Submit" />
      </form>
    )
  }

});

ReactDOM.render(<Catalog/>, document.querySelector('#main'));
