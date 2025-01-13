import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import React from 'react';

function Api_integration() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <>

            <div>
                {/* <h1>API Integration</h1> */}
                <table border="1" width="100%">

                    <tr>
                        <th width="10%"><p>id</p></th>
                        <th width="10%"><p>userid</p></th>
                        <th width="30%"><p>title</p></th>
                        <th width="50%"><p>body</p></th>
                    </tr>
                </table>
                {data.map((ele, i) => (
                <table border="1">
                    <tr>
                        <td width="10%" style={{textAlign:"center"}}><p key={i}>{ele.userId}</p></td>
                        <td width="10%" style={{textAlign:"center"}}><p key={i}>{ele.id}</p></td>
                        <td width="30%"><p key={i}>{ele.title}</p> </td>
                        <td width="50%"><p key={i}>{ele.body}</p> </td>
                    </tr>
                </table>
              
                ))}

            </div>
        </>
    );
}

export default Api_integration;
