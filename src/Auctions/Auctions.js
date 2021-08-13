import React from 'react';
import TopAdminPanel from '../TopAdminPanel/TopAdminPanel';
import MenuAdminPanel from '../MenuAdminPanel/MenuAdminPanel';
import './AuctionsStyle.css';

export default class Auctions extends React.Component {

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
            <div className={"Auctions"}>
                <TopAdminPanel />
                <MenuAdminPanel />

                <div className={"HomePageAdminPanelHeadTxt"}>Ogłoszenia użytkowników</div>

                <div id={"DeleteAuction"}>
                    Na pewno chcesz usunąć ogłoszenie?
                    <div className={"buttonsConfirmation"}>
                        <div className={"yes"} onClick={this.yes}>Tak</div>
                        <div className={"no"} onClick={this.no}>Nie</div>
                    </div>
                </div>

                <div id={"DeleteAuctionInformation"}>
                    Pomyślnie usnięto ogłoszenie.
                    <div className={"ok"} onClick={this.ok}>OK</div>
                </div>

                <table>
                    <tr>
                        <th>ID</th>
                        <th>E-mail</th>
                        <th>Telefon</th>
                        <th>Imię</th>
                        <th>Tytuł</th>
                        <th>Kod ISBN</th>
                        <th>Podgląd</th>
                        <th>Edytuj</th>
                        <th>Usuń</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>jan@kowalski.pl</td>
                        <td>123456789</td>
                        <td>Jan</td>
                        <td>Pan Tadeusz</td>
                        <td>9788378879343</td>
                        <td><a href={"/SiteBookLogged"}><img src={"look.svg"}/></a></td>
                        <td><a href={"/EditAuctionAdmin"}><img src={"edit.svg"}/></a></td>
                        <td><img src={"delete.svg"} onClick={this.delete}/></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>jan@kowalski.pl</td>
                        <td>123456789</td>
                        <td>Jan</td>
                        <td>Pan Tadeusz</td>
                        <td>9788378879343</td>
                        <td><img src={"look.svg"}/></td>
                        <td><img src={"edit.svg"}/></td>
                        <td><img src={"delete.svg"}/></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>jan@kowalski.pl</td>
                        <td>123456789</td>
                        <td>Jan</td>
                        <td>Pan Tadeusz</td>
                        <td>9788378879343</td>
                        <td><img src={"look.svg"}/></td>
                        <td><img src={"edit.svg"}/></td>
                        <td><img src={"delete.svg"}/></td>
                    </tr>
                </table>
            </div>
        )
    }
}