import React, { useState } from "react";

const options = [
    {
        emoji: '👍',
        label: 'like',
    },
    {
        emoji: '🤔',
        label: "don't know"
    },
    {
        emoji: '👎',
        label: 'dislike'
    }
]

function Option({ clickHandler }) {
    const [selected, setSelected] = useState(null);

    const optionSelectHandler = (option) => {
        setSelected(option.label);
        clickHandler(option.label);
    }

    return (
        <div className="flex flex space-x-4 justify-center"> 
            {options.map(option => {
                return(
                    <div className="" key={option.label}>
                        <button type={option.type} onClick={() => optionSelectHandler(option)} className="mx-5 flex-col shake">
                            <span className={`text-6xl ${selected == option.label? 'text-8xl':''}`}>{option.emoji}</span>
                            <span className={`block mt-3 text-3xl label ${selected == option.label? 'visible':''}`}>{option.label}</span>
                        </button>
                    </div>
                );
            })}
        </div>
    )
}

export default Option;