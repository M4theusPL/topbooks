import React from 'react';
import TopAdminPanel from '../TopAdminPanel/TopAdminPanel';
import MenuAdminPanel from '../MenuAdminPanel/MenuAdminPanel';
import './HomePageAdminPanelStyle.css';

export default class HomePageAdminPanel extends React.Component {

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

    ok(){
        document.getElementById("DeleteAuctionInformation").style.display = "none";
    }

    render() {
        return (
            <div className={"HomePageAdminPanel"}>
                <TopAdminPanel />
                <MenuAdminPanel />

                <div className={"HomePageAdminPanelHeadTxt"}>Baza książek</div>
                <a href={"/AddNewBook"}><div className={"buttonAddBookAdmin"}>Dodaj książkę</div></a>

                <div id={"DeleteAuction"}>
                    Na pewno chcesz usunąć książkę Pan Tadeusz?
                    <div className={"buttonsConfirmation"}>
                        <div className={"yes"} onClick={this.yes}>Tak</div>
                        <div className={"no"} onClick={this.no}>Nie</div>
                    </div>
                </div>

                <div id={"DeleteAuctionInformation"}>
                    Pomyślnie usnięto książkę Pan Tadeusz.
                    <div className={"ok"} onClick={this.ok}>OK</div>
                </div>

                <table>
                    <tr>
                        <th>Tytuł</th>
                        <th>Autorzy</th>
                        <th>Wydawnictwo</th>
                        <th>Rok wydania</th>
                        <th>Kod ISBN</th>
                        <th>Edytuj</th>
                        <th>Usuń</th>
                    </tr>
                    <tr>
                        <td>Pan Tadeusz</td>
                        <td>Adam Mickiewicz</td>
                        <td>XYZ</td>
                        <td>2019</td>
                        <td>9788378879343</td>
                        <td><a href={"/BookEdit"}><img src={"edit.svg"}/></a></td>
                        <td><img src={"delete.svg"} onClick={this.delete}/></td>
                    </tr>
                    <tr>
                        <td>Pan Tadeusz</td>
                        <td>Adam Mickiewicz</td>
                        <td>XYZ</td>
                        <td>2019</td>
                        <td>9788378879343</td>
                        <td><img src={"edit.svg"}/></td>
                        <td><img src={"delete.svg"}/></td>
                    </tr>
                    <tr>
                        <td>Pan Tadeusz</td>
                        <td>Adam Mickiewicz</td>
                        <td>XYZ</td>
                        <td>2019</td>
                        <td>9788378879343</td>
                        <td><img src={"edit.svg"}/></td>
                        <td><img src={"delete.svg"}/></td>
                    </tr>
                </table>
            </div>
        )
    }
}