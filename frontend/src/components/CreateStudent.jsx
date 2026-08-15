import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';

function CreateStudent() {
    return (
        
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            
           
            <Card className="p-4 shadow-lg rounded" style={{ width: '100%', maxWidth: '500px' }}>
                <CardBody>
                    
                    
                    <h2 className="text-center mb-4 fw-bold text-primary">Create Student</h2>
                    
                    <Form>
                        <FormGroup>
                            <Label for="exampleName" className="fw-semibold">Name</Label>
                            <Input
                                id="exampleName"
                                name="name"
                                placeholder="Enter your name"
                                type="text"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleAge" className="fw-semibold">Age</Label>
                            <Input
                                id="exampleAge"
                                name="age"
                                placeholder="Enter your age"
                                type="number"
                            />
                        </FormGroup>
                        
                        <FormGroup tag="fieldset">
                            <Label className="fw-semibold">Gender</Label>
                            
                            {/* d-flex use karala Radio buttons deka ekama peliyata gannawa */}
                            <div className="d-flex gap-4 mt-2">
                                <FormGroup check>
                                    <Input
                                        name="gender"
                                        type="radio"
                                        id="male"
                                    />
                                    {' '}
                                    <Label check for="male">Male</Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input
                                        name="gender"
                                        type="radio"
                                        id="female"
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
                            />
                        </FormGroup>
                        
                        {/* w-100 deela button eka full width karanawa */}
                        <Button color="primary" className="w-100 mt-3 py-2 fw-bold">
                            Submit
                        </Button>
                    </Form>

                </CardBody>
            </Card>
        </div>
    );
}

export default CreateStudent;