var React = require('react/addons');

var KoloLogo = require('./KoloLogo');

var KoloHeader = React.createClass({

  render: function() {
    return (
      <div className='header'>
        <KoloLogo />
        <h1>KOLO UNGA</h1>
      </div>);
  }

});

module.exports = KoloHeader;
