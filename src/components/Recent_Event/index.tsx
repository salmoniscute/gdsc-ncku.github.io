import React ,{ useState, useEffect } from 'react';
import axios from "axios";

export default function RecentEvent(): React.ReactElement {
    

    const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts" 
    });
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        client.get('?_limit=10').then((response) => {
           setPosts(response.data);
        });
     }, []);

    return(
        <div id="recent-event">
            <div>

            </div>

        </div>
    );
}