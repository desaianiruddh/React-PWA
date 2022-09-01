import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

const User = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [onlineMode, setOnlineMode] = useState(true);
  useEffect(() => {
    const fetchUser = async () => {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          setUserInfo(response.data);
          localStorage.setItem('userInfo', JSON.stringify(response.data));
        })
        .catch(() => {
          setUserInfo(JSON.parse(localStorage.getItem('userInfo')));
          setOnlineMode(false);
        });
    };
    fetchUser();
  }, []);
  return (
    <div>
      {!onlineMode && (
        <Alert variant={'warning'} className="mt-3 mx-5 text-center fw-bold">
          You are in offline mode or some issue with connection
        </Alert>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((user) => {
            const { id, name, email, address } = user;
            return (
              <tr key={user.id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{address.street}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default User;
