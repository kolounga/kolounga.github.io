var React = require('react');

const KoloLogo = React.createClass({

  render: function() {
    // Some characteristics
    var scale = 15;
    var right = 50;
    var barRatio = 6.9;
    var barSepRatio = 1.7;
    var barWidth = scale;
    var barHeight = scale * barRatio;
    var barSep = scale * barSepRatio;
    var barLeft = right;
    var barRight = right + barSep;
    var barCenter = (barLeft + barRight) / 2;
    var centerx = barCenter + barWidth / 2;
    var centery = barHeight / 2;

    // Generate the content
    return (
      <svg width="300" height="300" className="kolo-logo">
        <rect x={barLeft} width={barWidth} height={barHeight}/>
        <rect x={barRight} width={barWidth} height={barHeight}/>
        <rect x={barCenter} width={barWidth} height={barHeight}
              transform={'rotate(45, ' + centerx + ',' + centery + ')'}/>
        <rect x={barCenter} width={barWidth} height={barHeight}
              transform={'rotate(-45,' + centerx + ',' + centery + ')'}/>
      </svg>
    );
  }
});

module.exports = KoloLogo;
