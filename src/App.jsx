import { Routes } from 'react-router-dom';
import './App.css';
import Card from './assets/components/Card';
import vehicles from './data/vehicles';

function App() {
  const vehicleList = vehicles.map(v => {
    return <Card title={v.name}  />
  })
  return ( 
  <div className="App">
 <h1> IMAIN</h1>
   <div className="Container">
     {vehicleList}
   </div>
   
</div>
  );

}

export default App;
