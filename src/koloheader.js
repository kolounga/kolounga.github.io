var KoloHeader = React.createClass({
  render: function() {
    return (
    <div className="header">
      <KoloResponsiveLogo />
    </div>
    )
  }
});
React.render(<KoloHeader />, document.getElementById('content'));
