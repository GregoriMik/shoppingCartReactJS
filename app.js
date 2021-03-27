class App extends React.Component{
  state = {
    availableProducts: 7,
    shoppingCart: 20,
  }
  handleRemoveFromCart = () =>{
    this.setState({
      shoppingCart: this.state.shoppingCart -1, 
    })
  }

  handleAddFromCart = () =>{
    this.setState({
      shoppingCart: this.state.shoppingCart +1,
    })
  }
  render() {
    return(
      <>
        <button disabled={this.state.shoppingCart===0? true : false} 
        onClick={this.handleRemoveFromCart}
        >-</button>
        <span> {this.state.shoppingCart} </span>
        <button onClick={this.handleAddFromCart}>+</button>
      </>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('root'))