import React from 'react';
import TopAdminPanel from '../TopAdminPanel/TopAdminPanel';
import MenuAdminPanel from '../MenuAdminPanel/MenuAdminPanel';
import './UsersStyle.css';

export default class Users extends React.Component {

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
            <div className={"Users"}>
                <TopAdminPanel />
                <MenuAdminPanel />

                <div className={"HomePageAdminPanelHeadTxt"}>Użytkownicy</div>

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
                        <th>Login</th>
                        <th>Telefon</th>
                        <th>Imię</th>
                        <th>Edytuj</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>jan@kowalski.pl</td>
                        <td>jan12</td>
                        <td>123456789</td>
                        <td>Jan</td>
                        <td><a href={"/ChangeUserInformationAdmin"}><img src={"edit.svg"}/></a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>jan@kowalski.pl</td>
                        <td>jan12</td>
                        <td>123456789</td>
                        <td>Jan</td>
                        <td><img src={"edit.svg"}/></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>jan@kowalski.pl</td>
                        <td>jan12</td>
                        <td>123456789</td>
                        <td>Jan</td>
                        <td><img src={"edit.svg"}/></td>
                    </tr>
                </table>
            </div>
        )
    }
}