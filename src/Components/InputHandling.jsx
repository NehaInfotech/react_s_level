import React, { useState } from 'react';

function InputHandling() {
    const [text, setText] = useState("");
    const [data, setData] = useState([]);
    const [isValid, setIsValid] = useState(true);

    const inputHandle = () => {
        if (text.trim() !== "") {
            const copy = [...data];
            copy.push(text);
            setData(copy);
            setText("");
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    const inputHandle1 = (index) => {
        const copy1 = [...data];
        copy1.splice(index, 1);
        setData(copy1);
    };
    const editableInputTypes=(index)=>{
        const copy2 = data[index];
        setText(copy2);
        inputHandle1(index);
        // data=[...text]
    }

    return (
        <>
            {/* for add set const value in input box */}
            <input
                type="text"
                value={text}
                onChange={(e) => {
                    // for add value in input box after the set const value
                    setText(e.target.value);
                }}
            />
            {/* for add print value */}
            <button onClick={inputHandle}>Click</button>
            {!isValid && <p>Invalid input</p>}

            <ul style={{ listStyle: "none" }}>
                {/* map potani sathe index and element lai ne aave 6 */}
                {data.map((item, index) => (
                    <li key={index}>
                        {item}
                        {data.length > 0 && (
                            <button onClick={() => inputHandle1(index)}>Delete</button>
                        )}
                        <button onClick={()=>editableInputTypes(index)}>edit</button>

                    </li>
                ))}
            </ul>
         
        </>
    );
}

export default InputHandling;