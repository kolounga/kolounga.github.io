var React = require('react');
const {Spring} = require('react-motion');

const KoloLogo = React.createClass({

  getInitialState() {
    return {open: false};
  },

  handleOpen() {
    this.setState({open: true});
  },

  handleClose() {
    this.setState({open: false});
  },

  interpolateCord(start, end, perc) {
    return [(end[0] - start[0]) * perc + start[0],
            (end[1] - start[1]) * perc + start[1],
            (end[2] - start[2]) * perc + start[2]];
  },

  render: function() {
    return (
      <Spring defaultValue={{val: 0}} endValue={{val: this.state.open ? 100 : 0}}>
        { i => {
          var scale = 15;
          var barRatio = 6.9;
          var barSepRatio = 1.7;
          var barSep = scale * barSepRatio;
          var left = 30;
          var right = left + barSep;
          var center = left + barSep / 2;
          var barWidth = scale;
          var barHeight = scale * barRatio;
          var halfWidth = barWidth / 2;
          var halfHeight = barHeight / 2;
          var menuSep = barWidth + 10;

          var percent = i.val / 100;

          var barBack = this.interpolateCord([center, 0, -45], [halfHeight, 0, 90], percent);
          var centerBack = [barBack[0] + halfWidth, barBack[1] + halfHeight];

          var barSlash = this.interpolateCord([center, 0, 45], [halfHeight, menuSep, 90], percent);
          var centerSlash = [barSlash[0] + halfWidth, barSlash[1] + halfHeight];

          var barRight = this.interpolateCord([right, 0, 0], [halfHeight, menuSep * 3, 90], percent);
          var centerRight = [barRight[0] + halfWidth, barRight[1] + halfHeight];

          var barLeft = this.interpolateCord([left, 0, 0], [halfHeight, menuSep * 2, 90], percent);
          var centerLeft = [barLeft[0] + halfWidth, barLeft[1] + halfHeight];

          return (
            <svg width="150" height={110 + i.val} className="kolo-logo"
                 onMouseEnter={this.handleOpen} onMouseLeave={this.handleClose}>
              <rect x={barLeft[0]} y={barLeft[1]} width={barWidth} height={barHeight}
                    transform={'rotate(' + barLeft[2] + ',' + centerLeft[0] + ',' + centerLeft[1] + ')'}/>
              <rect x={barRight[0]} y={barRight[1]} width={barWidth} height={barHeight}
                    transform={'rotate(' + barRight[2] + ',' + centerRight[0] + ',' + centerRight[1] + ')'}/>
              <rect x={barSlash[0]} y={barSlash[1]} width={barWidth} height={barHeight}
                    transform={'rotate(' + barSlash[2] + ',' + centerSlash[0] + ',' + centerSlash[1] + ')'}/>
              <rect x={barBack[0]} y={barBack[1]} width={barWidth} height={barHeight}
                    transform={'rotate(' + barBack[2] + ',' + centerBack[0] + ',' + centerBack[1] + ')'}/>
            </svg>
          );
        }}
      </Spring>
    );
  }
});

module.exports = KoloLogo;
