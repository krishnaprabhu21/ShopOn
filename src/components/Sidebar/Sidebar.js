import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import css from "./Sidebar.css";
import Filter from "./Filter/Filter";

function Sidebar() {
    const filterArr = [
        {
            id: 1, name: "Collection", subTypes: [
                { id: 100, name: "Collection 1" },
                { id: 101, name: "Collection 2" },
                { id: 102, name: "Collection 3" },
            ]
        },
        {
            id: 2, name: "Color", subTypes: [
                { id: 200, name: "Color 1" },
                { id: 201, name: "Color 2" },
                { id: 202, name: "Color 3" },
            ]
        },

        {
            id: 3, name: "Category", subTypes: [
                { id: 300, name: "Category 1" },
                { id: 301, name: "Category 2" },
                { id: 302, name: "Category 3" },
            ]
        },
    ];

    return (
        <div className="col-sm-3 col-md-3 col-lg-3">
            <span id="filter__title">FILTER BY</span>
            <Accordion defaultActiveKey="">
                {
                    filterArr.map(filter => (
                        <Filter
                            eventKeyProps={filter.id}
                            filterNameProps={filter.name}
                            subTypesProps={filter.subTypes}
                        />
                    ))
                }


            </Accordion>
        </div>
    )
}

export default Sidebar
