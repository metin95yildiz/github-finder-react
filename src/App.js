import Finder from "./components/Finder";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Github Finder</h1>
        <p>Enter a username you're looking for...</p>
      </header>
      <div className="content">
        <Finder />
        <Profile />
      </div>
    </div>
  );
}

export default App;
