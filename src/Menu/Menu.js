import React from 'react';
import "./MenuStyle.css";

export default class Menu extends React.Component {
    render() {
        return (
            <div className={"headMenu"}>
                <div className={"MenuButtons"}>
                    <a href={"/"}><div className={"MenuButton"}>Strona Główna</div></a>
                    <a href={"/Category"}><div className={"MenuButton"}>Historia</div></a>
                    <div className={"MenuButton"}>Komiksy</div>
                    <div className={"MenuButton"}>Romanse</div>
                    <div className={"MenuButton"}>Science fiction i fantasy</div>
                    <a href={"SiteBookOther"}><div className={"MenuButton"}>Inne</div></a>
                </div>
            </div>
        )
    }
}