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


  render: function() {
    // Some characteristics
    var scale = 15;
    var right = 30;
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
      <Spring defaultValue={{val: 0}} endValue={{val: this.state.open ? 100 : 0}}>
        { i => {
          return (
            <svg width="150" height="110" className="kolo-logo"
                 onMouseEnter={this.handleOpen} onMouseLeave={this.handleClose}>
              <rect x={barLeft + i.val} width={barWidth} height={barHeight}/>
              <rect x={barRight} width={barWidth} height={barHeight}/>
              <rect x={barCenter} width={barWidth} height={barHeight}
                    transform={'rotate(45, ' + centerx + ',' + centery + ')'}/>
              <rect x={barCenter} width={barWidth} height={barHeight}
                    transform={'rotate(-45,' + centerx + ',' + centery + ')'}/>
            </svg>
          );
        }}
      </Spring>
    );
  }
});

module.exports = KoloLogo;
