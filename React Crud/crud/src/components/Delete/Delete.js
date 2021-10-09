import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../userContext/userContext';
import './Delete.css'
import { Button,Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Delete = () => {
    const[users,setUsers]=useContext(userContext);
    const {id}=useParams();
    const deleteUser=(id)=>{
        const user=users.filter((user)=>user.id !=id)
        setUsers(user)
    }
    return (
        <div>
        <Modal.Dialog>
              <Modal.Header >
                <Modal.Title>Are you sure?</Modal.Title>
              </Modal.Header>
            <Modal.Footer>
                <Link to='/'>
                <Button className='delete' variant="info">Cancel</Button>
                <Button onClick={()=>deleteUser(id)} variant="danger">Delete</Button>
                </Link>
            </Modal.Footer>
        </Modal.Dialog>
        </div>
    );
};

export default Delete;