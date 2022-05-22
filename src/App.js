import { useState } from 'react';
import './App.css';
import Bill from './components/Bill';
import Header from './components/Header';
import People from './components/People';
import Results from './components/Results';
import Tips from './components/Tips';

function App() {
  const [bill, setBill] = useState("")
  const [people, setPeople] = useState("")
  const [tip, setTip] = useState("")
  
  let tipAmount = ((Number(bill) * Number(tip))/100).toFixed(2)
  let tipPerPerson = ((Number(tipAmount)) / (Number(people))).toFixed(2)
  let totalPerPerson = ((Number(bill) + Number(tipAmount))/Number(people)).toFixed(2)

  
  return (
    <div className="App">
        <Header />
      <div className='main-container'>
      <div className='media-input-container'>
        <Bill bill={bill} setBill={setBill}/>
        <Tips bill={bill} people={people} tip={tip} setTip={setTip}/>
        <People people={people} setPeople={setPeople}/>

      </div>
        <Results tipPerPerson={tipPerPerson} totalPerPerson={totalPerPerson}
        setBill={setBill} setTip={setTip} setPeople={setPeople}/>  
    </div>
    </div>  
  );
}

export default App;
