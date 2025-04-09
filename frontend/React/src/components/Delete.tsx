import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function isLoading(loading: boolean){
	return (
		loading ? <p>loading...</p>
		: <>
			<p>Item successfully deleted</p>
			<Link to='/' className='btn btn-success'>Go Home</Link>
		</>
	);
}
function Delete(){
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const { id } = useParams();
	useEffect(() => {
		const deleteBook = async () => {
			try {
				const res = await axios.delete(`http://localhost:5050/api/books/${id}`);
				console.log(res);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		}
		deleteBook();
	}, []);
//	return <h1>Delete</h1>
	return (<>{isLoading(loading)}</>);
}


export default Delete;
