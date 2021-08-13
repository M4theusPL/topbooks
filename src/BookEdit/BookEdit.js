import React from 'react';
import TopAdminPanel from '../TopAdminPanel/TopAdminPanel';
import MenuAdminPanel from '../MenuAdminPanel/MenuAdminPanel';
import './BookEditStyle.css';

export default class BookEdit extends React.Component {

    update(){
        document.getElementById("informationChangeAccountInfromations").style.display = "block";
    }

    ok(){
        document.getElementById("informationChangeAccountInfromations").style.display = "none";
    }

    delete(){
        document.getElementById("DeleteAuction").style.display = "block";
    }

    yes(){
        document.getElementById("DeleteAuction").style.display = "none";
        document.getElementById("DeleteAuctionInformation").style.display = "block";
    }

    no(){
        document.getElementById("DeleteAuction").style.display = "none";
    }

    render() {
        return (
            <div>
                <TopAdminPanel />
                <MenuAdminPanel />

                <div className={"headBookEdit"}>

                    <div id={"informationChangeAccountInfromations"}>
                        Pomyślnie edytowano informacje o książce.
                        <div className={"ok"} onClick={this.ok}>OK</div>
                    </div>

                    <div id={"DeleteAuction"}>
                        Na pewno chcesz usunąć książkę Pan Tadeusz?
                        <div className={"buttonsConfirmation"}>
                            <div className={"yes"} onClick={this.yes}>Tak</div>
                            <div className={"no"} onClick={this.no}>Nie</div>
                        </div>
                    </div>

                    <div id={"DeleteAuctionInformation"}>
                        Pomyślnie usnięto książkę Pan Tadeusz.
                        <a href={"/HomePageAdminPanel"}>
                            <div className={"ok"}>OK</div>
                        </a>
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

                    <div className={"buttonsBookEdit"}>
                        <a href={"/HomePageAdminPanel"}>
                            <div className={"buttonBack"}>
                                <img src={"back.svg"}/>
                            </div>
                        </a>
                        <div className={"buttonDeleteBook"} onClick={this.delete}>Usuń książkę</div>
                        <div className={"buttonUpdateDataBook"} onClick={this.update}>Aktualizuj dane</div>
                    </div>
                </div>



            </div>
        )
    }
}