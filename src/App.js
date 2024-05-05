import './App.css';
import { useState } from 'react';
import { photos } from './models/photos';
import { symbols } from './models/symbols';
import { quotes } from './models/quotes';
import Card from './components/Card';
import Button from './components/Button';
import Quote from './components/Quote';

function App() {

  let [counter, setCounter] = useState(0);
  let [currentImage, setCurrentImage] = useState(photos[counter]);
  let [currentQuote, setCurrentQuote] = useState(quotes[counter]);

  const changeFace = () => {
    setCounter((prevCount) => {
      const newCount = prevCount +=1;
      if (newCount >= photos.length) {
        return 0;
      }
      return newCount
    });
    setCurrentImage(photos[counter]);
    setCurrentQuote(quotes[counter]);
  }

  const reverseFace = () => {
    setCounter((prevCount) => {
      const newCount = prevCount -=1;
      if (newCount < 0) {
        return photos.length -=1;
      }
      return newCount;
    });
    setCurrentImage(photos[counter]);
    setCurrentQuote(quotes[counter]);
  }

  return (
    <div className="App">
     <Quote content={currentQuote}/>
      <Card currentImage={currentImage}/>

      <div className="btnContainer">
        <Button action={reverseFace} icon={symbols.left} />
        <Button action={changeFace} icon={symbols.right} />
      </div>
    </div>
  );
}

export default App;
