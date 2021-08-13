import React from 'react';
import TopAdminPanel from '../TopAdminPanel/TopAdminPanel';
import MenuAdminPanel from '../MenuAdminPanel/MenuAdminPanel';
import './QuestionStyle.css';

export default class Question extends React.Component {

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
            <div className={"Question"}>
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
                    <a href={"Questions"}><div className={"ok"}>OK</div></a>
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

                    <a href={"/Questions"}>
                        <div className={"buttonBack"}>
                            <img src={"back.svg"}/>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}