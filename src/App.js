// App.js
import './App.css';
import Dashboard from './components/Dashboard';
import Dashboardres from './components/Dashboardres';
import Layout from './components/Layout';

function App() {
  return (
    <div className="container-fluid m-3">
      <div className="row align-items-start">
        <div className="col-lg-2 col d-lg-block d-none">
          <Dashboard />
        </div>
        <div className="col-lg-2 d-lg-none d-block">
          <Dashboardres />
        </div>
        <div className="col col-lg-10" style={{ backgroundColor: "#DCDCDC" }}>
          <Layout />
        </div>
      </div>
    </div>
  );
}

export default App;
