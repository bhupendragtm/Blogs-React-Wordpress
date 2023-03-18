import { useEffect, useState } from 'react';
import axios from 'axios';


export default function useFetch(url) {
    const [data, setData] = useState(null);
    useEffect(() => {
        const loadData=()=> {
            axios
            .get(url)
            .then((res) => {
            const posts = res.data;
            setData(posts);
            console.log(data);
            });
        }

        loadData();
    }, [url]);
    return data;
}