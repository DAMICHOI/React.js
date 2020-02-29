import React from "react";  // JSX를 쓰기 때문에 Webstorm이 자동으로 추가함

// Named export
export const Header = (props) => {
    return (
        <header className="header">
            <h1 className="h1">{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}