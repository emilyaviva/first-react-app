var React = require('react');

var Pokemon = React.createClass({
  render: function() {
    return (
      <li>
        <strong>Name:</strong> {this.props.pokemon.name}<br/>
        <em>Level:</em> {this.props.pokemon.level}
      </li>
    );
  }
});

module.exports = Pokemon;
