class App extends React.Component{
  state = {
    
  }
  render() {
    return(
      <>
        <button disabled>-</button>
        <span> 0 </span>
        <button>+</button>
      </>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('root'))