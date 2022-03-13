import React, { useEffect, useState } from "react";
import { Row, Col, Container, Card, InputGroup, Form, Button, Alert } from "react-bootstrap";
import { addData, changeDispay } from "@redux/actions";
import { RootState } from "@redux/reducers";
import { useAppDispatch } from "@redux/store";
import { useSelector } from "react-redux";
import { APIService } from "src/services/api";
var _ = require('lodash');

export const Tricentis: React.FC = () => {
    const [searchKey, setSearchKey] = useState('');
    const [message, setMessage] = useState('');
    let intervalPointer: NodeJS.Timeout;
    const dispatch = useAppDispatch();
    const tData = useSelector((state: RootState) => state.tdata);
    const handleDisplay = () => {
        dispatch(changeDispay());
    }
    const startInterval = (interval: number) => {
        intervalPointer = setInterval(handleDisplay, interval);
    }
    const stopInterval = () => {
        if (intervalPointer)
            clearInterval(intervalPointer);
    }
    const handleSearch = async (e:any) => {
        try {
            e.preventDefault();
            setMessage('');
            stopInterval();
            const response = await APIService.api().get(`search?term=${searchKey}`);
            if (response && response.data && response.data.results && response.data.results.length > 0) {
                const uniqueValue = _.uniq(response.data.results, 'collectionName');
                const sortedArray = _.orderBy(uniqueValue, ['collectionName'], ['asc']);
                const onlyString = _.map(sortedArray, "collectionName");
                const finalArray = onlyString.slice(0, 5);
                dispatch(addData(finalArray));
                setMessage("Search Reasult of : " + searchKey);
                setSearchKey('');
                startInterval(1000);
            }
        } catch (error) {
            setMessage("Error : " + searchKey);
            console.log("error", error);
        }
    }
    return (
        <Container className="my-5 flex-grow-1">
            <Row>
                {message ? <Col md={12}><Alert variant="info">{message}</Alert></Col> : null}
                <Col md={12}>
                <Form onSubmit={(e)=> handleSearch(e)}>
                    <InputGroup className="mb-3">
                        <Form.Control type="text" defaultValue={searchKey} onChange={(e) => setSearchKey(e.target.value)} />
                        <Button variant="outline-secondary" id="button-search" type="submit">
                            Search
                        </Button>
                    </InputGroup>
                    </Form>
                </Col>
                {(tData.displayList).map((element, index) => (
                    <Col md={12} key={index} className="mb-3">
                        <Card className="border-none">
                            <Card.Body>
                                <Card.Title>{element}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container >
    );
};
