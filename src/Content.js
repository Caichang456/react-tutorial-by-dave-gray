import {useState} from 'react';

const Content = () =>{
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

	const handleCheck = (id) =>{
		const listItems = items.map((item)=>item.id===id?{...item, checked: !item.checked}:item);
		setItems(listItems);
	}

	const handleDelete = (id) =>{
		const listItems = items.filter((item)=>item.id!==id);
		setItems(listItems);
	}

	return (
		<main>
			{items.length ? (
				<ul>
					{items.map((item)=>(
						<li clasName="item" key={item.id}>
							<input 
								type="checkbox"
								onChange={()=>handleCheck(item.id)}
								checked={item.checked}/>
							<label>{item.item}</label>
							<button
								onClick={()=>handleDelete(item.id)}>Delete</button>
						</li>
					))}
				</ul>
			):(
				<p>Your list is empty</p>
			)}
		</main>
	);
}

export default Content;