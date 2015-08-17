var React = require('react')

var NavBar = React.createClass({
  render: function() {
    return (
      <ul>
        <li>About</li>
        <li>Blog</li>
        <li>Product</li>
        <li>Contact</li>
      </ul>
    )
  }
})

var Title = React.createClass({
  render: function() {
    return (
      <h1>Giant React Website™!</h1>
    )
  }
})

var Top = React.createClass({
  render: function() {
    return (
      <section>
        <Title/>
        <NavBar/>
      </section>
    )
  }
})

var SubHeader = React.createClass({
  render: function() {
    return (
      <h3>This is a subheader</h3>
    )
  }
})

var Content = React.createClass({
  render: function() {
    return (
      <section>
        <SubHeader/>
        <p>This is where all the stuff goes</p>
      </section>
    )
  }
})

var App = React.createClass({
  render: function() {
    return (
      <main>
        <Top/>
        <Content/>
      </main>
    )
  }
})

React.render(<App/>, document.body)
