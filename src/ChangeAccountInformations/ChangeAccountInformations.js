import React from 'react';
import TopLogged from '../TopLogged/TopLogged';
import MenuLogged from '../MenuLogged/MenuLogged';
import MobileSearch from '../MobileSearch/MobileSearch';
import './ChangeAccountInformationsStyle.css';

export default class ChangeAccountInformations extends React.Component {

    changeData(){
        document.getElementById('informationChangeAccountInfromations').style.display = 'block';
    }

    ok(){
        document.getElementById('informationChangeAccountInfromations').style.display = 'none';
    }


    render() {
        return (
            <div>
                <TopLogged />
                <MenuLogged />
                <MobileSearch />
                <div className={"frameChangeAccountInformations"}>

                    <div id={"informationChangeAccountInfromations"}>
                        Pomyślnie edytowano informacje o koncie.
                        <div className={"ok"} onClick={this.ok}>OK</div>
                    </div>

                    <div className={"informationPersonalChange"}>
                        Informacje personalne
                    </div>
                    <div className={"personalData"}>
                        <div className={'left'}>
                            Imię
                        </div>
                        <div className={'right'}>
                            <input type={"text"}/>
                        </div>
                    </div>
                    <div className={"personalData"}>
                        <div className={'left'}>
                            Nazwisko
                        </div>
                        <div className={'right'}>
                            <input type={"text"}/>
                        </div>
                    </div>


                    <div className={"informationAccount"}>
                        Informacje konta
                    </div>
                    <div className={"accountData"}>
                        <div className={'left'}>
                            Stare hasło
                        </div>
                        <div className={'right'}>
                            <input type={"text"}/>
                        </div>
                    </div>
                    <div className={"accountData"}>
                        <div className={'left'}>
                            Nowe hasło
                        </div>
                        <div className={'right'}>
                            <input type={"text"}/>
                        </div>
                    </div>
                    <div className={"accountData"}>
                        <div className={'left'}>
                            Powtórz nowe hasło
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

                    <div className={"buttonRegister"} onClick={this.changeData}>
                        Aktualizuj dane
                    </div>
                </div>
            </div>
        )
    }
}