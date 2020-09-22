import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { AiFillCaretDown } from "react-icons/ai";

function Filter(props) {
    const { eventKeyProps, filterNameProps } = props;

    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={eventKeyProps}>
                    {filterNameProps}
                    <AiFillCaretDown className="float__right" />
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={eventKeyProps}>
                <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default Filter
