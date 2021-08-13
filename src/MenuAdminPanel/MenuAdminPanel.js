import React from 'react';

export default class MenuAdminPanel extends React.Component {
    render() {
        return (
            <div className={"headMenu"}>
                <div className={"MenuButtons"}>
                    <a href={"HomePageAdminPanel"}><div className={"MenuButton"}>Baza książek</div></a>
                    <a href={"Auctions"}><div className={"MenuButton"}>Ogłoszenia użytkowników</div></a>
                    <a href={"Questions"}><div className={"MenuButton"}>Prośby od użytkowników</div></a>
                    <a href={"Users"}><div className={"MenuButton"}>Użytkownicy</div></a>
                </div>
            </div>
        )
    }
}