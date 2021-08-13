import React from 'react';
import TopAdminPanel from '../TopAdminPanel/TopAdminPanel';
import MenuAdminPanel from '../MenuAdminPanel/MenuAdminPanel';
import './AddNewBookManualStyle.css';

export default class BookEdit extends React.Component {

    addBook(){
        document.getElementById("DeleteAuctionInformation").style.display = "block";
    }

    render() {
        return (
            <div>
                <TopAdminPanel />
                <MenuAdminPanel />

                <div className={"headBookEdit"}>

                    <div id={"DeleteAuctionInformation"}>
                        Pomyślnie dodano książkę do bazy.
                        <a href={"/HomePageAdminPanel"}><div className={"ok"}>OK</div></a>
                    </div>

                    <div className={"bookInformation"}>
                        <div className={"bookTxt"}>Tytuł</div>
                        <div className={"bookInput"}><input type={"text"}/></div>
                    </div>

                    <div className={"bookInformation"}>
                        <div className={"bookTxt"}>Autorzy</div>
                        <div className={"bookInput"}><input type={"text"}/></div>
                    </div>

                    <div className={"bookInformation"}>
                        <div className={"bookTxt"}>Wydawnictwo</div>
                        <div className={"bookInput"}><input type={"text"}/></div>
                    </div>

                    <div className={"bookInformation"}>
                        <div className={"bookTxt"}>Rok wydania</div>
                        <div className={"bookInput"}><input type={"text"}/></div>
                    </div>

                    <div className={"bookInformation"}>
                        <div className={"bookTxt"}>Kod ISBN</div>
                        <div className={"bookInput"}><input type={"text"}/></div>
                    </div>

                    <div className={"buttonsAddNewBookManual"}>
                        <a href={"/HomePageAdminPanel"}>
                            <div className={"buttonBack"}>
                                <img src={"back.svg"}/>
                            </div>
                        </a>
                        <div className={"buttonUpdateDataBook"} onClick={this.addBook}>Dodaj książkę</div>
                    </div>
                </div>



            </div>
        )
    }
}