import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './ItemDetail.css';

const ItemDetail = () => {
    const { type, id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                let response;
                switch (type) {
                    case 'creed':
                        response = await axios.get('/data/creeds.json');
                        break;
                    case 'confession':
                        response = await axios.get('/data/confessions.json');
                        break;
                    case 'catechism':
                        response = await axios.get('/data/catechisms.json');
                        break;
                    case 'council':
                        response = await axios.get('/data/councils.json');
                        break;
                    default:
                        return;
                }
                const item = response.data.find(item => item.id === parseInt(id));
                setItem(item);
            } catch (error) {
                console.error('Error fetching item details!', error);
            }
        };
        fetchItem();
    }, [type, id]);

    if (!item) return <div>Loading...</div>;

    return (
        <div className="item-detail">
            <h2>{item.title}</h2>
            <p><strong>Type:</strong> {item.type}</p>
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Origin:</strong> {item.origin}</p>
            <p><strong>Language:</strong> {item.language}</p>
            <p><strong>Summary:</strong> {item.summary}</p>
            <div><strong>Text:</strong></div>
            <pre>{item.text}</pre>
            <Link to={`/${type}s`} className="nav-link">Back to {type}s</Link>
        </div>
    );
};

export default ItemDetail;
