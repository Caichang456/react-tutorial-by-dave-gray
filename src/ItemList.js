const ItemList = ({items, handleCheck, handleDelete}) =>{
	return (
		<ul>
			{items.map((item) => (
				<li className="item" key={item.id}>
					<input 
						type="checkbox"
						onChange={() => handleCheck(item.id)}
						checked={item.checked}
					/>
					<label>{item.item}</label>
					<button onClick={() => handleDelete(item.id)}>
						Delete
					</button>
				</li>
			))}
		</ul>
	);
}

export default ItemList;