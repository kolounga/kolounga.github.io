'use strict';

var React = require('react/addons');
var KoloLogo = require('./KoloLogo');

// CSS
require('normalize.css');
require('../styles/main.scss');
require('../styles/colors.scss');

//var imageURL = require('../images/kolologo.svg');

var KoloApp = React.createClass({
  render: function() {
    return (
      <div className="main">
        <KoloLogo />
        <h1>KOLO UNGA</h1>
        <h2>Header 2 Text</h2>
        <h3>Header 3 Text</h3>
        <div>Normal text.</div>
      </div>
    );
  }
});

module.exports = KoloApp;
