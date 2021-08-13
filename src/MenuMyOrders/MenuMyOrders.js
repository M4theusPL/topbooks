import React from 'react';

export default class MenuMyOrders extends React.Component {
    render() {
        return (
            <div className={"headMenu"}>
                <div className={"MenuButtons"}>
                    <a href={"/HomePageLogged"}><div className={"MenuButton"}>Strona główna</div></a>
                    <a href={"/MyOrders"}><div className={"MenuButton"}>Moje Ogłoszenia</div></a>
                    <a href={"/CollectionOrders"}><div className={"MenuButton"}>Zgłoszenia o odebranie</div></a>
                    <a href={"/AddAuction"}><div className={"MenuButton"}>Dodaj ogłoszzenie</div></a>
                </div>
            </div>
        )
    }
}