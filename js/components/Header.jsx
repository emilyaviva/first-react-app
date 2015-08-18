var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <section>
        <h1>{this.props.slogan}</h1>
      </section>
    );
  }
});

module.exports = Header;
