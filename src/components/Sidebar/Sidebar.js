import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import css from "./Sidebar.css";
import Filter from "./Filter/Filter";

function Sidebar() {
    const filterArr = [
        { id: 1, name: "Collection" },
        { id: 2, name: "Color" },
        { id: 3, name: "Category" },
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
                        />
                    ))
                }


            </Accordion>
        </div>
    )
}

export default Sidebar
