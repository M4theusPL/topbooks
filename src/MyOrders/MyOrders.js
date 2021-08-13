import React from 'react';
import TopAccount from '../TopAccount/TopAccount';
import MenuMyOrders from '../MenuMyOrders/MenuMyOrders';
import MobileSearch from '../MobileSearch/MobileSearch';
import NewBooksLogged from '../NewBooksLogged/NewBooksLogged';
import './MyOrdersStyle.css';

export default class MyOrders extends React.Component {
    render() {
        return (
            <div>
                <TopAccount />
                <MenuMyOrders />
                <MobileSearch />

                <div className={"MyOrders"}>
                    <div className={"MyOrdersHeadTxt"}>Moje ogłoszenia</div>

                    <div className={"listBooks"}>

                        <div className={"bookOrders"}>
                            <div className={"bookOrderInside"}>
                                <img src={"ksiazka.png"} />
                                <div className={"descriptions"}>
                                    <div className={"title"}>Tytuł książki</div>
                                    <div className={"description"}>Autorzy książki</div>
                                    <div className={"description"}>Wydawnictwo</div>
                                    <div className={"description"}>Rok wydania</div>
                                    <div className={"description"}>Kod EAN</div>
                                </div>
                            </div>
                            <a href={'/EditAuction'}>
                                <div className={"editBook"}>
                                    Edytuj
                                </div>
                            </a>
                        </div>

                        <div className={"bookOrders"}>
                            <div className={"bookOrderInside"}>
                                <img src={"ksiazka.png"} />
                                <div className={"descriptions"}>
                                    <div className={"title"}>Tytuł książki</div>
                                    <div className={"description"}>Autorzy książki</div>
                                    <div className={"description"}>Wydawnictwo</div>
                                    <div className={"description"}>Rok wydania</div>
                                    <div className={"description"}>Kod EAN</div>
                                </div>
                            </div>
                            <div className={"editBook"}>
                                Edytuj
                            </div>
                        </div>

                        <div className={"bookOrders"}>
                            <div className={"bookOrderInside"}>
                                <img src={"ksiazka.png"} />
                                <div className={"descriptions"}>
                                    <div className={"title"}>Tytuł książki</div>
                                    <div className={"description"}>Autorzy książki</div>
                                    <div className={"description"}>Wydawnictwo</div>
                                    <div className={"description"}>Rok wydania</div>
                                    <div className={"description"}>Kod EAN</div>
                                </div>
                            </div>
                            <div className={"editBook"}>
                                Edytuj
                            </div>
                        </div>

                        <div className={"bookOrders"}>
                            <div className={"bookOrderInside"}>
                                <img src={"ksiazka.png"} />
                                <div className={"descriptions"}>
                                    <div className={"title"}>Tytuł książki</div>
                                    <div className={"description"}>Autorzy książki</div>
                                    <div className={"description"}>Wydawnictwo</div>
                                    <div className={"description"}>Rok wydania</div>
                                    <div className={"description"}>Kod EAN</div>
                                </div>
                            </div>
                            <div className={"editBook"}>
                                Edytuj
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        )
    }
}