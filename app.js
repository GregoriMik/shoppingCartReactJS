class App extends React.Component{
  state = {
    availableProducts: 7,
    shoppingCart: 0,
  }
  render() {
    return(
      <>
        <button disabled={this.state.shoppingCart===0? true : false}>-</button>
        <span> {this.state.shoppingCart} </span>
        <button>+</button>
      </>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('root'))