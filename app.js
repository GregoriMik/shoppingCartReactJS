class App extends React.Component{
  state = {
    availableProducts: 7,
    shoppingCart: 1,
    shoppingTxt:"Kup"
  }
  handleBuy = () =>{
    this.setState({
      availableProducts: this.state.availableProducts - this.state.shoppingCart,
      shoppingCart: 0
    })
    // console.log("Kupione!")
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

    // const style= this.state.shoppingCart === 0?{opacity:0.3}:{};// drugi zapis potem w spanie odwołujemy się "{style}";
    return(
      <div>
        <button disabled={this.state.shoppingCart===0? true : false} 
        onClick={this.handleRemoveFromCart}
        >-</button>
        <span style={this.state.shoppingCart===0? { opacity: 0.3 }:{}}> {this.state.shoppingCart} </span>
        <button disabled={this.state.shoppingCart < this.state.availableProducts? false : true}onClick={this.handleAddFromCart}>+</button>
        {this.state.shoppingCart>0 && <button onClick={this.handleBuy}>Kup</button>}
        {/* {this.state.shoppingCart>0 && this.state.shoppingTxt} */}
      </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('root'))