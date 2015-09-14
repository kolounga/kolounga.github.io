'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.scss');
require('../styles/colors.scss');

var imageURL = require('../images/kolologo.svg');

var KoloApp = React.createClass({
  render: function() {
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = KoloApp;
