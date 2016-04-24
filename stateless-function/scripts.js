const HelloMessage = ({ message }) => (
  <h1>Hello {message}!</h1>
)

ReactDOM.render(
  <HelloMessage message='World' />,
  document.getElementById('root')
)
