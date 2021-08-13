import React from 'react';
import TopAdminPanel from '../TopAdminPanel/TopAdminPanel';
import MenuAdminPanel from '../MenuAdminPanel/MenuAdminPanel';
import './QuestionSearchStyle.css';

export default class QuestionSearch extends React.Component {

    addBook(){
        document.getElementById('informationChangeAccountInfromations').style.display='block';
    }

    delete(){
        document.getElementById('DeleteAuction').style.display='block';
    }

    no(){
        document.getElementById('DeleteAuction').style.display='none';
    }

    yes(){
        document.getElementById('DeleteAuction').style.display='none';
        document.getElementById('DeleteAuctionInformation').style.display='block';
    }

    render() {
        return (
            <div className={"QuestionSearch"}>
                <TopAdminPanel />
                <MenuAdminPanel />

                <div className={"HomePageAdminPanelHeadTxt"}>Prośby od użytkowników</div>

                <div id={"informationChangeAccountInfromations"}>
                    Pomyślnie dodano książkę do bazy.
                    <a href={"Questions"}>
                        <div className={"ok"}>OK</div>
                    </a>
                </div>

                <div id={"DeleteAuction"}>
                    Na pewno chcesz usunąć prośbę?
                    <div className={"buttonsConfirmation"}>
                        <div className={"yes"} onClick={this.yes}>Tak</div>
                        <div className={"no"} onClick={this.no}>Nie</div>
                    </div>
                </div>

                <div id={"DeleteAuctionInformation"}>
                    Pomyślnie usnięto prośbę.
                    <a href={"/Questions"}>
                        <div className={"ok"}>OK</div>
                    </a>
                </div>

                <div className={"quest"}>
                    <table>
                        <tr>
                            <th>Kod ISBN</th>
                            <th>Szukaj w Google</th>
                            <th>Usuń</th>
                        </tr>
                        <tr>
                            <td>9788378879343</td>
                            <td><a href={"/QuestionSearch"}><img src={"look.svg"}/></a></td>
                            <td><img src={"delete.svg"} onClick={this.delete}/></td>
                        </tr>
                    </table>


                    <table>
                        <tr>
                            <th>Tytuł</th>
                            <td>Pan Tadeusz</td>
                        </tr>
                        <tr>
                            <th>Autor</th>
                            <td>Adam Mickiewicz</td>
                        </tr>
                        <tr>
                            <th>Wydawca</th>
                            <td>XYZ</td>
                        </tr>
                        <tr>
                            <th>Rok wydania</th>
                            <td>2019</td>
                        </tr>
                        <tr>
                            <th>ISBN</th>
                            <td>8386841087, 9788386841080</td>
                        </tr>
                    </table>

                    <div className={"buttonsQuestionSearch"}>
                        <a href={"/Questions"}>
                            <div className={"buttonBack"}>
                                <img src={"back.svg"}/>
                            </div>
                        </a>

                        <div className={"buttonAddNewBookGoogle"} onClick={this.addBook}>
                            Dodaj ksiażkę do bazy
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}