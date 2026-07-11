import './App.css';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';
import {useState} from 'react';
import AddItem from './AddItem.js';
import SearchItem from './SearchItem.js';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'Item 1'
    },
    {
      id: 2,
      checked: false,
      item: 'Item 2'
    },
    {
      id: 3,
      checked: false,
      item: 'Item 3'
    }
  ]);

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const setAndSaveItems = (newItem) =>{
    setItems(newItem);
  }

  const addItem = (item) =>{
    const id = items.length ? items[items.length - 1].id+1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }

  const handleCheck = (id) =>{
    const listItems = items.map((item)=>item.id===id?{...item, checked: !item.checked}:item);
    setAndSaveItems(listItems);
  }

  const handleDelete = (id) =>{
    const listItems = items.filter((item)=>item.id!==id);
    setAndSaveItems(listItems);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    setNewItem('');
    //console.log("Submitted!");
  }

  return (
    <>
      <Header title="Groceries"/>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit} />
      <SearchItem
        search={search}
        setSearch={setSearch} />
      <Content
        items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete} />
      <Footer
        length={items.length} />
    </>
  );
}

export default App;
