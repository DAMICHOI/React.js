import React, {Fragment} from 'react';

export const SearchBar = (props) => {
    return (
        <>
            <input placeholder="Search..."
                   value={props.keyword}
                   onChange={(e) => props.setKeyword(e.target.value)}>
            </input>
            <br/>
            <label>
                <input type="checkbox"
                       checked={props.stockChecked}
                       onChange={(e) => props.setStockChecked(e.target.checked)}>
                </input> Only Show products in stock
            </label>
        </>
    );
}