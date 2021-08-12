import React from 'react';

const ArrayDisplay = ({currentGirl}) => {
    return (
        <div>
            <p>{currentGirl.instruction.toUpperCase()} FROM THE GROUP</p>
            <div className="girls-array-container">
                <div className="girls-array">
                    <p>let spiceGirls =&nbsp;</p>
                    
                    <p>[&nbsp;</p>
                    {currentGirl.girlsArray.map(girl => {
                        if(currentGirl.girlsArray.indexOf(girl) === currentGirl.girlsArray.length - 1) {
                            return <p>{girl}&nbsp;</p>
                        } else {
                            return <p>{girl},&nbsp;</p>
                        }
                    })}
                    <p>]</p>
                </div>
            </div>
        </div>
    );
};

export default ArrayDisplay;