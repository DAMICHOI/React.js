import React, {Fragment} from 'react';

export const SearchBar = (props) => {
    return (
        <>
            <input placeholder="Search..."
                   value={props.keyword}
                   onChange={(e) => props.setKeyword(e.target.value)}></input>
            <br/>
            <input type="checkbox"></input> Only Show products in stock
        </>
    );
}