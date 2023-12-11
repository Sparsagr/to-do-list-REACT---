import React, { useState } from 'react';
import ToDoLists from './ToDoLists';


const App=()=>{

  const [inputList,setInputList]= useState("");

  // to display in the list
  const [Items,setItems]=  useState([]);
  
  
  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };

  const listOfItems=()=>{
    setItems((oldItems)=>{
      // spread operator
      return [...oldItems, inputList];
    });

    // for not displaying anything in the placeholder after adding
    setInputList("");
  };

  // deleting
  const deleteItems=(id)=>{
    console.log('deleted')
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index!== id;
      })
    })
};

  return<>
  <div className='main_div'>
    <div className='center_div'>
      <br/> 
      <h1><i class="fa-solid fa-list-ul"></i> ToDo List </h1>
      <br/>
      <input type='text' placeholder='Add your Stuff' 
      value={inputList}
      onChange={itemEvent} />
      <button onClick={listOfItems}><i class="fa-solid fa-plus"></i></button>
      
      <ol>
        {/* <li>
          {inputList}
        </li> */}
        {/* 1. current vaue 2. index of that current value 3. the array you are dealing with 4. this*/}
        {Items.map( (itemval, index) => {
          // calling array to display it in the list
          // props 
          return <ToDoLists key={index} 
          id={index} 
          text={itemval}
        onSelect={deleteItems}  
          />;
        })}
      </ol>
    </div>
  </div>
  </>
};

export default App;
