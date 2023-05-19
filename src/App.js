import { useState } from 'react';
import './App.css';
import Form from './Components/UI/Form';
import Kvadrat from './Components/UI/Kvadrat';

function App() {
//   const [mane, setMane] = useState(false)
// const onManeset=()=>{
//   setMane((prev))
// }

  return (
    <div className="App">
     {/* <Form onMane= {onManeset}/> */}
     <Kvadrat/>
    </div>
  );
}

export default App;
