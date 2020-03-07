import React, {Fragment} from 'react';

export const SearchBar = (props) => {
    return (
        <>
            <input placeholder="Search..."></input>
            <br/>
            <input type="checkbox"></input> Only Show products in stock
        </>
    );
}