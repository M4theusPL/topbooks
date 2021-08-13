import React from 'react';
import TopAdminPanel from '../TopAdminPanel/TopAdminPanel';
import MenuAdminPanel from '../MenuAdminPanel/MenuAdminPanel';
import './ChangeUserInformationAdminStyle.css';

export default class ChangeUserInformationAdmin extends React.Component {

    changeData(){
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

    ok(){
        document.getElementById('informationChangeAccountInfromations').style.display='none';
    }


    render() {
        return (
            <div>
                <TopAdminPanel />
                <MenuAdminPanel />
                <div className={"frameChangeAccountInformations"}>

                    <div id={"informationChangeAccountInfromations"}>
                        Pomyślnie zmieniono informacje o użytkowniku.
                        <div className={"ok"} onClick={this.ok}>OK</div>
                    </div>

                    <div id={"DeleteAuction"}>
                        Na pewno chcesz usunąć konto użytkownika?
                        <div className={"buttonsConfirmation"}>
                            <div className={"yes"} onClick={this.yes}>Tak</div>
                            <div className={"no"} onClick={this.no}>Nie</div>
                        </div>
                    </div>

                    <div id={"DeleteAuctionInformation"}>
                        Pomyślnie usnięto użytkownika.
                        <a href={"/Users"}>
                            <div className={"ok"}>OK</div>
                        </a>
                    </div>

                    <div className={"personalDataAdmin"}>
                        <div className={'left'}>
                            Imię
                        </div>
                        <div className={'right'}>
                            <input type={"text"}/>
                        </div>
                    </div>
                    <div className={"personalDataAdmin"}>
                        <div className={'left'}>
                            Nazwisko
                        </div>
                        <div className={'right'}>
                            <input type={"text"}/>
                        </div>
                    </div>

                    <div className={"userAvatar"}>
                        <img src={"userbig.svg"}/>
                        <div className={"selectImage"}>
                            Wybierz zdjęcie
                        </div>
                    </div>

                    <div className={"ChangeUserInformationAdmin"}>
                        <a href={"/Users"}>
                            <div className={"buttonBack"}>
                                <img src={"back.svg"}/>
                            </div>
                        </a>
                        <div className={"buttonDeleteAccountUser"} onClick={this.delete}>
                            Usuń Konto
                        </div>
                        <div className={"buttonUpdateAccountUser"} onClick={this.changeData}>
                            Aktualizuj dane
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}