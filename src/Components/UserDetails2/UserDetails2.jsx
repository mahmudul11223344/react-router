import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const user = use(userPromise)
    const {name, username} = user;
    
    return (
        <div>
            <p>Name : {name}</p>
            <p>{username}</p>
        </div>
    );
};

export default UserDetails2;