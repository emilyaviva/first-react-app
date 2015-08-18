var React = require('react');
var Pokemon = require('./Pokemon.jsx')

var PokemonList = React.createClass({
  render: function() {
    var ourPokemon = this.props.pokemonList.map(function(pokemon) {
      return (
        <Pokemon pokemon={pokemon}/>
      );
    });
    return (
      <section>
        <h3>Current Pokemon</h3>
        <ul>{ourPokemon}</ul>
      </section>
    );
  }
});

module.exports = PokemonList;
