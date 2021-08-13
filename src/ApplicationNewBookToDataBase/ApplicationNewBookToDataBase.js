import React from 'react';
import TopLogged from '../TopLogged/TopLogged';
import MenuMyOrders from '../MenuMyOrders/MenuMyOrders';
import './ApplicationNewBookToDataBaseStyle.css';


export default class ApplicationNewBookToDataBase extends React.Component {

    AddBook(){
        document.getElementById('informationChangeAccountInfromations').style.display='block';
    }

    render() {
        return (
            <div>
                <div id={'marginTop'}></div>
                <TopLogged />
                <MenuMyOrders />

                <div className={"MyOrdersHeadTxt"}>Zgłaszanie nowej książki</div>

                <div className={"headApplicationNewBookToDataBase"}>

                    <div id={"informationChangeAccountInfromations"}>
                        Pomyślnie dodano zgłoszenie.
                        <a href={"/MyOrders"}>
                            <div className={"ok"}>OK</div>
                        </a>
                    </div>

                    <div className={"txtApplicationNewBook"}>
                        Kod ISBN książki
                    </div>
                    <input type={'text'}/>

                    <div className={'buttonApplicationNewBook'} onClick={this.AddBook}>
                        Zgłoś nową książkę
                    </div>




                </div>
            </div>

        )
    }
}