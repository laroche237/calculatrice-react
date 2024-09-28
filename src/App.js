import React, {useState, useEffect} from 'react';
import './App.css';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';
import History from './components/History';
import {evaluate} from 'mathjs'; //alternative à eval

function App() {
  const [input, setInput]=useState('');
  const [result, setResult]=useState('');
  const [isResult, setIsResult] = useState(false); // flag
  const [history, setHistory] = useState([]) // état de l'historique


  // enregistrer l'historique depuis le localstorage on mount
  useEffect(()=> {
    const storedHistory = JSON.parse(localStorage.getItem('calcHistory'));
    if(storedHistory){
      setHistory(storedHistory);
    }
  }, [] );

  //sauvegarder l'historique peu importes quand il change
  useEffect(() => {
    localStorage.setItem('calcHistory', JSON.stringify(history));
  }, [history])

  const handleButtonClick = (value) => {
    if(value === 'C'){
      setInput('');
      setResult('');
      setIsResult(false);
    }else if (value === '='){
      try{
        //la fonction eval est à utiliser avec précaution
        const evalResult = evaluate(input); //Using mathjs evaluate 
        setResult(evalResult.toString());
        setIsResult(true);//set a flag after calculation
        setHistory([{expression : input, result: evalResult.toString()}, ...history]);
      }catch(error){
        setResult('Error');
        setIsResult(true); //set a flag after an error
      }
    }else{
      if(isResult){
        //Si la dernière action était un calcul, rafraichissons l'écran
        setInput(value);
        setResult('');
        setIsResult(false);
      }else{
        setInput(input+value); //Concaténer la valeur à l'entrée
      }
 
    }
  };
  return (
    <div className="app">
      <h1>Calculatrice React</h1>
      <div className="calculator-container">
      <div className="calculator">
      <Display input={input} result={result} />
      <ButtonPanel  onButtonClick={handleButtonClick} />
    </div>
    <History history = {history} />
    </div>
    </div>
  );
}

export default App;
