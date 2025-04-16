import React from 'react';
import { useLoaderData } from 'react-router';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>These are my posts : {posts.length}</h2>
        </div>
    );
};

export default Posts;