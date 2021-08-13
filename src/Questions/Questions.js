import React from 'react';
import TopAdminPanel from '../TopAdminPanel/TopAdminPanel';
import MenuAdminPanel from '../MenuAdminPanel/MenuAdminPanel';
import './QuestionsStyle.css';

export default class Questions extends React.Component {

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
            <div className={"Questions"}>
                <TopAdminPanel />
                <MenuAdminPanel />

                <div className={"HomePageAdminPanelHeadTxt"}>Prośby od użytkowników</div>

                <div id={"DeleteAuction"}>
                    Na pewno chcesz usunąć prośbę?
                    <div className={"buttonsConfirmation"}>
                        <div className={"yes"} onClick={this.yes}>Tak</div>
                        <div className={"no"} onClick={this.no}>Nie</div>
                    </div>
                </div>

                <div id={"DeleteAuctionInformation"}>
                    Pomyślnie usnięto prośbę.
                    <div className={"ok"} onClick={this.ok}>OK</div>
                </div>

                <table>
                    <tr>
                        <th>ID</th>
                        <th>E-mail</th>
                        <th>Kod ISBN</th>
                        <th>Tytuł książki</th>
                        <th>Data zgłoszenia</th>
                        <th>Podgląd</th>
                        <th>Usuń</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>jan@kowalski.pl</td>
                        <td>9788378879343</td>
                        <td>Pan Tadeusz</td>
                        <td>2021-07-27</td>
                        <td><a href={"/Question"}><img src={"look.svg"}/></a></td>
                        <td><img src={"delete.svg"} onClick={this.delete}/></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>jan@kowalski.pl</td>
                        <td>9788378879343</td>
                        <td>Pan Tadeusz</td>
                        <td>2021-07-27</td>
                        <td><img src={"look.svg"}/></td>
                        <td><img src={"delete.svg"}/></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>jan@kowalski.pl</td>
                        <td>9788378879343</td>
                        <td>Pan Tadeusz</td>
                        <td>2021-07-27</td>
                        <td><img src={"look.svg"}/></td>
                        <td><img src={"delete.svg"}/></td>
                    </tr>
                </table>
            </div>
        )
    }
}