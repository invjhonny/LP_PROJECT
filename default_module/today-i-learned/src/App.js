import './style.css'

function App() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" width="68" height="68" alt="Today I Learned logo" />
        <h1>Today I Learned</h1>
        <button className="btn btn-open btn-large">Share a fact</button>
      </div>
    </header>
  );
}

export default App;