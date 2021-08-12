import React from 'react';
import girlObjects from '../constants/girlObjects';
import AnswerArea from './AnswerArea';
import ArrayDisplay from './ArrayDisplay';

const Game = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [currentGirl, setCurrentGirl] = React.useState(girlObjects[0])
    const [guess, setGuess] = React.useState({
        number: "",
        index: "",
    });
    const [particallyCorrect, setPartiallyCorrect] = React.useState(false);
    const [incorrect, setIncorrect] = React.useState(false);
    const [complete, setComplete] = React.useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        const {index, number} = currentGirl.answer;

        if(guess.index === index.toString() && guess.number === number.toString()) {
            setGuess({
                number: "",
                index: "",
            });

            setPartiallyCorrect(false);
            setIncorrect(false);

            if(girlObjects.length > currentIndex + 1) {
                setCurrentGirl(girlObjects[currentIndex + 1]);
                setCurrentIndex((currIndex) => {
                    return currIndex += 1;
                })
            } else {
                setComplete(true);
            }
        } else if (
            (guess.index !== index.toString() && guess.number === number.toString()) ||
            (guess.index === index.toString() && guess.number !== number.toString())
        ) {
            setPartiallyCorrect(true);
            setIncorrect(false);
        } else {
            setPartiallyCorrect(false);
            setIncorrect(true);
        }
    }

    const handleChange = (event) => {
        setGuess((currGuess) => {
            const newGuess = {...currGuess};
            newGuess[event.target.id] = event.target.value;
            return newGuess;
        })
    }

    const renderAlert = () => {
        if(incorrect) {
            return <p>TOTAL FAIL</p>
        } else if (particallyCorrect) {
            return <p>you got some of it right</p>
        } else if (complete) {
            return <p>that's the end of the game</p>
        } else {
            return null;
        }
    }

    return (
        <div className="game">

            <ArrayDisplay currentGirl={currentGirl}/>
            <AnswerArea guess={guess} handleChange={handleChange} handleSubmit={handleSubmit} renderAlert={renderAlert}/>
        </div>
    );
};

export default Game;

//