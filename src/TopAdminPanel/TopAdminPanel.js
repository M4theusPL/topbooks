import React from 'react';
import './TopAdminPanelStyle.css';

export default class TopAdminPanel extends React.Component {

    pokaz() {
        document.getElementById('userAdminPanel').style.display = 'none';
        document.getElementById('useractiveAdminPanel').style.display = 'block';
        document.getElementById('panelLoginAdminPanel').style.display = 'block';
    }

    ukryj() {
        document.getElementById('userAdminPanel').style.display = 'block';
        document.getElementById('useractiveAdminPanel').style.display = 'none';
        document.getElementById('panelLoginAdminPanel').style.display = 'none';
    }


    render() {
        return (
            <div className={"headTopAdminPanel"}>
                <a href={"/HomePageAdminPanel"}>
                    <div className={"logoAdminPanel"}>
                    TopBooks
                </div>
                </a>

                <a href={"/HomePageLogged"}>
                    <div className={"backToShop"}>
                        <div className={"buttonBackToShop"}>
                            Wróć do sklepu
                        </div>
                    </div>
                </a>

                <div className={"searchAdminPanel"}>
                    <input type={"text"} placeholder={"Wpisz tytuł, autora..."}/>
                    <button type={"button"}><img src={"./search.svg"} /> Szukaj</button>
                </div>


                <div className={"userAdmin"}>
                    <div className={"helloUserAdmin"}>Witaj Jan</div>

                    <div className={"userAvatarAdmin"}>
                        <div id={"userAdminPanel"} onClick={this.pokaz}>
                            <img src={"./user.svg"} />
                            <div id={"userframeAdminPanel"} ></div>
                        </div>

                        <div id={"useractiveAdminPanel"} onClick={this.ukryj}>
                            <img src={"./user.svg"} />
                            <div id={"userframeactiveAdminPanel"}></div>
                        </div>
                    </div>


                    <a href={"/Logout"}>
                        <div className={"logoutAdmin"}>
                            <img src={"logout.svg"}/>
                        </div>
                    </a>

                    <div id={"panelLoginAdminPanel"}>
                        <a href={'/ChangeAccountInformations'}>
                            <div className={"panelButton1"}>
                                Zmień informacje konta
                            </div>
                        </a>

                        <a href={'/MyOrders'}>
                            <div className={"panelButton2"}>
                                Moje ogłoszenia
                            </div>
                        </a>

                        <a href={'/HomePageAdminPanel'}>
                            <div className={"panelButtonsRed"}>
                                Panel administracyjny
                            </div>
                        </a>
                    </div>
                </div>



            </div>
        )
    }
}