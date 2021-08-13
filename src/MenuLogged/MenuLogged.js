import React from 'react';

export default class MenuLogged extends React.Component {
    render() {
        return (
            <div className={"headMenu"}>
                <div className={"MenuButtons"}>
                    <a href={"/HomePageLogged"}><div className={"MenuButton"}>Strona Główna</div></a>
                    <a href={"/CategoryLogged"}><div className={"MenuButton"}>Historia</div></a>
                    <div className={"MenuButton"}>Komiksy</div>
                    <div className={"MenuButton"}>Romanse</div>
                    <div className={"MenuButton"}>Science fiction i fantasy</div>
                    <a href={"/SiteBookOtherLogged"}><div className={"MenuButton"}>Inne</div></a>
                </div>
            </div>
        )
    }
}