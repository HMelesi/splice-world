import React from 'react';

const AnswerArea = ({handleSubmit, guess, handleChange, renderAlert}) => {

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="splice-container">
                    <p>spiceGirls.splice(</p>
                    <label
                        htmlFor="index"
                    ></label>
                    <input 
                        className="number-input"
                        value={guess.index} 
                        id="index"
                        onChange={handleChange}
                    ></input>
                    <p>,</p>
                    <label
                        htmlFor="number"
                    ></label>
                    <input
                        className="number-input"
                        value={guess.number}
                        id="number"
                        onChange={handleChange}
                    ></input>
                    <p>);</p>
                </div>
                <button className="remove-button" type="submit">
                    REMOVE HER
                </button>
            </form>
            {renderAlert()}
        </div>
    );
};

export default AnswerArea;