import './App.css';
import BussinessPage from './components/Bussiness';
import {Profiles} from './components/Card'
function App() {
  return (
    <div style={{height:"50vh"}}>
      <BussinessPage className="container2" />
      <Profiles/>
    </div>
  )
}

export default App;