import React, { useEffect, useState } from 'react'

function User({ id }) {
    const users = [{ userId: 1, name: "Yossi 1" }, { userId: 2, name: "Yossi 2" }, { userId: 3, name: "Yossi 3" }]
    const getUser = (id) => {
        let user;
        if (id) {
            user = users.find(elem => {
                return elem.userId === Number(id);
            });
        }

        if (!user) {
            user = { userId: id, name: "Unknown" }
        }
        return user;
    }


    const [user, setUser] = useState(getUser(id));
    const [userId, setUserId] = useState(Number(id));
    useEffect(() => {
        setUser(getUser(userId));
        console.log("User useEffect", user, "userId", userId);
    }, [userId])
    return (
        <>

            <h3>{`User ${id}`}</h3>
            <p>This example we get the initial user id from the route </p>
            <p>Then we use a stare on the userId that we can change the user with Next And Pre button</p>
            <p>useEffect then get the current user</p>
            <p>You can see that if you press on the current Button, useEffect not call and we don't render again the user</p>
            <div>   
                <button onClick={() => setUserId((prev) => prev - 1)}>Prev</button>
                <button onClick={() => setUserId((prev) => prev )}>Current</button>
                <button onClick={() => setUserId((prev) => prev + 1)}>Next</button>
            </div>
            <ul>
                <li>{user.name}</li>
                <li>{user.userId}</li>
            </ul>
        </>

    )
}

export default User