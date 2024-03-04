import './App.css';
import Dashboard from './components/Dashboard'
import Layout from './components/Layout';

function App() {
  return (
    <div className="m-3">
      <div className="row align-items-start">
        <div className="col-2">
          <Dashboard />
        </div>
        <div className="col" style={{ backgroundColor: "#DCDCDC" }}>
          <Layout />
        </div>
      </div>
    </div>
  );
}

export default App;
