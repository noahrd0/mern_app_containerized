import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Book } from '../types.ts';

const renderTable = (data: Book[]) => {
        return (<table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">ISBN</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
                data.map((book, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.ISBN}</td>
                            <td className='d-flex justify-content-around'>
                                <Link to={`/read/${book._id}`} className='btn btn-info'>Read</Link>
                                <Link to={`/update/${book._id}`} className='btn btn-primary'>Edit</Link>
                                <Link to={`/delete/${book._id}`} className='btn btn-danger'>Delete</Link>
                            </td>
                        </tr>
                    );
                })
            }
          </tbody>
        </table>);
}

function Home() {
	const [products, setProducts] = useState<Book[]>([]);

	useEffect(() => {
        const getProducts  = async () => {
            try {
                const res = await axios.get('http://localhost:5050/api/books');
                console.log(res.data);
                setProducts(res.data);
            } catch (error) {
                console.log(error);
            }
        }
	getProducts();
	},[])
	return (
        <div className='container mt-5 text-center d-flex flex-column' style={{ gap: '10px' }}>
            <h1>Home</h1>
            {renderTable(products)}
            <Link to='/create' className='btn btn-success'>Create +</Link>
        </div>
	);
}

export default Home;
