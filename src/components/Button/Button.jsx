
const Button = ({loadMore, items}) => {
	return (
		<>
		{items.length>0 ? <button onClick={loadMore}>Load more</button>:null}
		
		</>
	)
};

export default Button;