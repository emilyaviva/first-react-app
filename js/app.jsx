var React = require('react')

var Pokemon = React.createClass({
  render: function() {
    return (
      <li>
        <strong>Name:</strong> {this.props.pokemon.name}<br/>
        <em>Level:</em> {this.props.pokemon.level}
      </li>
    )
  }
})

var PokemonList = React.createClass({
  render: function() {
    var ourPokemon = this.props.pokemonList.map(function(pokemon) {
      return (
        <Pokemon pokemon={pokemon}/>
      )
    })
    return (
      <section>
        <h3>Current Pokemon</h3>
        <ul>{ourPokemon}</ul>
      </section>
    )
  }
})

var PokemonListContainer = React.createClass({
  getInitialState: function() {
    return {
      pokemon: [
        {name: 'Charmander', level: 1},
        {name: 'Bulbasaur', level: 1},
        {name: 'Goodra', level: 1},
        {name: 'Pikachu', level: 1}
      ]
    }
  },
  render: function() {
    return (
      <PokemonList pokemonList={this.state.pokemon} />
    )
  }
})

var Header = React.createClass({
  render: function() {
    return (
      <section>
        <h1>{this.props.slogan}</h1>
      </section>
    )
  }
})

var App = React.createClass({
  render: function() {
    return (
      <main>
        <Header slogan="Gotta catch 'em all!" />
        <PokemonListContainer />
      </main>
    )
  }
})


React.render(<App />, document.body)
