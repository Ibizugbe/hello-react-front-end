import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Greeting from './components/greetings';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Link to="/greeting">See greetings</Link>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>
  );
}
export default App;
