var React = require('react');
var PokemonList = require('./PokemonList.jsx');

var PokemonListContainer = React.createClass({
  getInitialState: function() {
    return {
      pokemon: [
        {name: 'Charmander', level: 1},
        {name: 'Bulbasaur', level: 1},
        {name: 'Goodra', level: 1},
        {name: 'Pikachu', level: 1}
      ]
    };
  },
  render: function() {
    return (
      <PokemonList pokemonList={this.state.pokemon} />
    );
  }
});

module.exports = PokemonListContainer;
