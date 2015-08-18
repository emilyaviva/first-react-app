var React = require('react');
var request = require('superagent');

var Header = require('./components/Header.jsx');
var PokemonListContainer = require('./components/PokemonListContainer.jsx');

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
