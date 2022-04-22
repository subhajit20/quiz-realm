import React, { useState, useEffect } from 'react';

function Person() {
    const [myData, setData] = useState([]);
    useEffect(() => {
        async function getName() {
            const res = await fetch('/person', {
                method: 'GET',
                credentials: 'include'
            })

            const data = await res.json();
            if (res.status === 200) {
                setData([data.p])
            } else {
                setData(data)
            }
        }
        getName();

        return () => {
            getName();
        }
    }, [])
    return (
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', top: '2rem' }}>
            {myData.map((x) => {
                return <h3 style={{ textDecoration: 'underline', color: '#443850', padding: '20px', borderRadius: '2rem' }}> Wellcome To {x[0].username}</h3>
            })}
        </div>
    )
}

export default Person
