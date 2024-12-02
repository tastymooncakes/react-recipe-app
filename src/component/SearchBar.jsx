import { useState } from "react";

const SearchBar = () => {

    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    const updateInput = (value) => {
        setInput(value);
    }

    const updateList = () => {
        input != "" &&
        setList([...list, {id: Math.random(), item: input.charAt(0).toUpperCase() + input.slice(1)}])
        setInput("");
    }

    const removeList = (key) => {
        setList((list) => list.filter((l) => l.id !== key))
    }

    return (
        <div className="content-container">
        <div className="searchBarContainer">
            <input className="searchBarInput" type="text" placeholder="eg: oregano" value={input} onChange={(e) => updateInput(e.target.value)} />
            <button className="searchBarButton" onClick={updateList}>+ Add Ingredient</button>
        </div>
        {list.length != 0 && 
            <div className="ingredientList">
                <h1>Ingredients on hand:</h1>
                {list.map((l) => (
                    <ul key={l.id}>
                        <div className="ingredientEntry">
                            <li>{l.item}</li>
                            <button className="deleteButton" onClick={() => removeList(l.id)}>x</button>
                        </div>
                        
                    </ul>
                ))}
                <div className="readyForRecipe-container">
                    <div className="readyForRecipe-section">
                        <h3>Ready for recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </div>
        }

        </div>
    )
}

export default SearchBar;