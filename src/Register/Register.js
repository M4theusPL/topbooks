import React from 'react';
import Top from '../Top/Top';
import Menu from '../Menu/Menu';
import MobileSearch from '../MobileSearch/MobileSearch';
import './RegisterStyle.css';

export default class Register extends React.Component {
    render() {
        return (
            <div>
                <Top />
                <Menu />
                <MobileSearch />

                <div className={"frameRegister"}>
                    <div className={"informationPersonal"}>
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
                            E-mail
                        </div>
                        <div className={'right'}>
                            <input type={"text"}/>
                        </div>
                    </div>
                    <div className={"accountData"}>
                        <div className={'left'}>
                            Hasło
                        </div>
                        <div className={'right'}>
                            <input type={"text"}/>
                        </div>
                    </div>
                    <div className={"accountData"}>
                        <div className={'left'}>
                            Powtórz hasło
                        </div>
                        <div className={'right'}>
                            <input type={"text"}/>
                        </div>
                    </div>

                    <div className={"regulations"}>
                        <img src={"switchoff.svg"}/>
                        Akceptuję regulamin
                    </div>

                    <a href={"RegisterDone"}>
                        <div className={"buttonRegister"}>
                            Zarejestruj się
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}