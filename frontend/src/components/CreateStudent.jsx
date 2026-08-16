import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, Card, CardBody, Alert } from 'reactstrap';

function CreateStudent() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');

    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    function saveData(e) {
        e.preventDefault();

        const newStudent = { name, age, gender, address };

        console.log(newStudent);

        axios.post('http://localhost:8070/students/add', newStudent).then(() => {
          
            setMessage('Student added successfully!');
            setError(false);
            
           
            setName('');
            setAge('');
            setGender('');
            setAddress('');
            
          
            setTimeout(() => setMessage(''), 3000); 

        }).catch((err) => {
          
            setMessage('Error adding student: ' + err.message);
            setError(true);
        })
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <Card className="p-2 shadow-lg rounded" style={{ width: '100%', maxWidth: '500px' }}>
                <CardBody>
                    <h2 className="text-center mb-4 fw-bold text-primary">Create Student</h2>

                  
                    {message && (
                        <Alert color={error ? "danger" : "success"}>
                            {message}
                        </Alert>
                    )}

                    <Form onSubmit={saveData}>
                        <FormGroup>
                            <Label for="exampleName" className="fw-semibold">Name</Label>
                            <Input
                                id="exampleName"
                                name="name"
                                placeholder="Enter your name"
                                type="text"
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleAge" className="fw-semibold">Age</Label>
                            <Input
                                id="exampleAge"
                                name="age"
                                placeholder="Enter your age"
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup tag="fieldset">
                            <Label className="fw-semibold">Gender</Label>
                            <div className="d-flex gap-4 mt-2">
                                <FormGroup check>
                                    <Input
                                        name="gender"
                                        type="radio"
                                        id="male"
                                        checked={gender === 'male'} 
                                        onChange={() => setGender('male')}
                                    />
                                    {' '}
                                    <Label check for="male">Male</Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input
                                        name="gender"
                                        type="radio"
                                        id="female"
                                        checked={gender === 'female'}
                                        onChange={() => setGender('female')}
                                    />
                                    {' '}
                                    <Label check for="female">Female</Label>
                                </FormGroup>
                            </div>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleAddress" className="fw-semibold">Address</Label>
                            <Input
                                id="exampleAddress"
                                name="address"
                                placeholder="Enter your address"
                                type="text"
                                value={address} 
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </FormGroup>

                        <Button color="primary" className="w-100 mt-3 py-2 fw-bold" type="submit">
                            Submit
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
}

export default CreateStudent;