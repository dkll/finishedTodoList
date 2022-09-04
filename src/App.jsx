import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {
     const [newItem, setNewitem] = useState('')
    const [items, setItems] = useState([]);
   

    //helper functions
    const handleClick = () => {
        if (!newItem) {
            alert('please enter a task first')
            return
        }
        const item = {
            id: Math.floor(Math.random()*10000),
            value: newItem
        }
        setItems([...items, item]);
        setNewitem('');
    }

    const deleteItem = (id) => {
        const newArray = items.filter(item => item.id !== id);
        setItems(newArray);
    }
   

    return (
        <div className="App">
            <h1> My Todo App</h1>
            <input type="text" placeholder="Enter task" value={newItem} onChange={(e) => setNewitem(e.target.value)} />
            <button onClick={handleClick}>add task</button>
            <ul>
                {items.map((item) => <li key={item.id}>{item.value} <button onClick={()=>deleteItem(item.id)}>x</button></li>)}
            </ul>
        </div> 
    );
}
export default App;
