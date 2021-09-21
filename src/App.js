import Style from 'Style.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const choices = ['rock', 'paper', 'scissors'];

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }

  useEffect(() => {
    // eslint-disable-next-line no-lone-blocks
    {
      // eslint-disable-next-line default-case
      switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
          setResult('YOU WIN!')
          break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
          setResult('YOU LOSE!')
          break
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':
          setResult('IT IS A DRAW!')
          break
      }
    }
  }, [computerChoice, userChoice])
  return (
    <div>
      <h1 className="user-choice">User choice is: {userChoice}</h1>
      <h1 className="computer-choice">Computer choice is: {computerChoice}</h1>
      {choices.map((choice, index) =>
        <button key={index} onClick={() => handleClick(choice)}>{choice}</button>)}
      <h1 className="result">{result}</h1>
    </div>
  );

}
export default App;
