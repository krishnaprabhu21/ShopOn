import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { GrDown } from "react-icons/gr";
import css from "./Filter.css";

function Filter(props) {
    const { eventKeyProps, filterNameProps, subTypesProps } = props;

    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={eventKeyProps}>
                    {filterNameProps}
                    <GrDown className="float__right" />
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={eventKeyProps}>
                <Card.Body>
                    {
                        subTypesProps.map(type => (
                            <div className="form-check" key={type.id}>
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    {type.name}
                                </label>
                            </div>
                        ))
                    }
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default Filter
