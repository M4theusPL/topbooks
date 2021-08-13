import React from 'react';
import TopAccount from '../TopAccount/TopAccount';
import MenuMyOrders from '../MenuMyOrders/MenuMyOrders';
import NewBooksLogged from '../NewBooksLogged/NewBooksLogged';
import MobileSearch from '../MobileSearch/MobileSearch';
import './CollectionOrdersStyle.css';

export default class CollectionOrders extends React.Component {

    confirmOrder(){
        document.getElementById('informationChangeAccountInfromations').style.display = 'block';
    }

    ok(){
        document.getElementById('informationChangeAccountInfromations').style.display = 'none';
    }

    render() {
        return (
            <div>
                <TopAccount />
                <MenuMyOrders />
                <MobileSearch />

                <div className={'CollectionOrders'}>
                    <div className={"MyOrdersHeadTxt"}>Zgłoszenie o odebranie</div>

                    <div id={"informationChangeAccountInfromations"}>
                        Pomyślnie potwierdzono odbiór.
                        <div className={"ok"} onClick={this.ok}>OK</div>
                    </div>

                    <div className={"listBooks"}>

                        <div className={"bookOrders"}>
                            <div className={"bookOrderInside"}>
                                <img src={"ksiazka.png"} />
                                <div className={"descriptions"}>
                                    <div className={"title"}>Tytuł książki</div>
                                    <div className={"description"}>Imię osoby odbierającej</div>
                                    <div className={"description"}>E-mail osoby odbierającej</div>
                                </div>
                            </div>
                            <div className={"confirmOrder"} onClick={this.confirmOrder}>
                                Potwierdzam odebranie
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}