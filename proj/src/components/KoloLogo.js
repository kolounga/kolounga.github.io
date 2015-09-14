var React = require('react');
var mat2d = require('gl-matrix').mat2d;
var vec2 = require('gl-matrix').vec2;

function generateCSSString(matrix) {
  var str = '';
  str += matrix[0].toFixed(5) + ',';
  str += matrix[1].toFixed(5) + ',';
  str += matrix[2].toFixed(5) + ',';
  str += matrix[3].toFixed(5) + ',';
  str += matrix[4].toFixed(5) + ',';
  str += matrix[5].toFixed(5);
  return 'matrix(' + str + ')';
}

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
    var centerVec = vec2.fromValues((barLeft + barRight) / 2, barHeight / 2);

    // Calculate some transforms for the bars
    var leftBar = mat2d.fromTranslation(mat2d.create(), vec2.fromValues(barLeft, 0));
    var rightBar = mat2d.fromTranslation(mat2d.create(), vec2.fromValues(barRight, 0));
    var center = mat2d.fromTranslation(mat2d.create(), centerVec);
    var backslash = mat2d.rotate(mat2d.create(), center, Math.PI / 4 );
    var slash = mat2d.rotate(mat2d.create(), center, 3 * Math.PI / 4 );
    mat2d.translate(backslash, backslash, vec2.fromValues(0, -centerVec[1]));
    mat2d.translate(slash, slash, vec2.fromValues(0, -centerVec[1]));

    // Generate the content
    return (
      <svg width="300" height="300" className="kolo-logo">
        <rect width={barWidth} height={barHeight} transform={generateCSSString(leftBar)}/>
        <rect width={barWidth} height={barHeight} transform={generateCSSString(rightBar)}/>
        <rect width={barWidth} height={barHeight} transform={generateCSSString(backslash)}/>
        <rect width={barWidth} height={barHeight} transform={generateCSSString(slash)}/>
      </svg>
    );
  }
});

module.exports = KoloLogo;
