import ItemList from './ItemList.js';

const Content = ({ items, handleCheck, handleDelete }) => {
	return (
		<>
			{items.length ? (
				<ItemList
					items={items}
					handleCheck={handleCheck}
					handleDelete={handleDelete} />
			) : (
				<p>Your list is empty</p>
			)}
		</>
	);
}

export default Content;