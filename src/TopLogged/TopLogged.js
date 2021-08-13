import React from 'react';
import "./TopLoggedStyle.css";


export default class TopLogged extends React.Component {

    pokaz() {
        document.getElementById('userLogged').style.display = 'none';
        document.getElementById('useractiveUserLogged').style.display = 'block';
        document.getElementById('panelLoginUserLogged').style.display = 'block';
    }

    ukryj() {
        document.getElementById('userLogged').style.display = 'block';
        document.getElementById('useractiveUserLogged').style.display = 'none';
        document.getElementById('panelLoginUserLogged').style.display = 'none';
    }

    showMenu(){
        document.getElementById("menu").style.display = 'none';
        document.getElementById("listMenu").style.display = 'block';
        document.getElementById('mobileClose').style.display = 'block';
    }

    hideMenu(){
        document.getElementById("menu").style.display = 'block';
        document.getElementById("listMenu").style.display = 'none';
        document.getElementById('mobileClose').style.display = 'none';
    }

    render() {
        return (
            <div className={"headTopLogged"}>

                <div id={"menu"} onClick={this.showMenu}>
                    <img src={"menu.svg"}/>
                </div>
                <div id={"mobileClose"} onClick={this.hideMenu}>
                    <img src={"hide.svg"}/>
                </div>

                <a href={"/HomePageLogged"}><div className={"logoLogged"}>
                    TopBooks
                </div>
                </a>

                <div className={"searchLogged"}>
                    <input type={"text"} placeholder={"Wpisz tytuł, autora..."}/>
                    <button type={"button"}><img src={"./search.svg"} /> Szukaj</button>
                </div>

                <div className={"userLog"}>
                    <div className={"helloUserLog"}>Witaj Jan</div>

                    <div className={"userAvatarLogged"}>
                        <div id={"userLogged"} onClick={this.pokaz}>
                            <img src={"./user.svg"} />
                            <div id={"userframeUserLogged"} ></div>
                        </div>

                        <div id={"useractiveUserLogged"} onClick={this.ukryj}>
                            <img src={"./user.svg"} />
                            <div id={"userframeactiveUserLogged"}></div>
                        </div>
                    </div>


                    <a href={"/Logout"}>
                        <div className={"logoutUser"}>
                            <img src={"logout.svg"}/>
                        </div>
                    </a>

                    <div id={"panelLoginUserLogged"}>
                        <div className={"panelLoginHelloAndLogout"}>
                            <div className={"helloUserLogMobile"}>Witaj Jan</div>
                            <a href={"/Logout"}>
                                <div className={"logoutUserMobile"}>
                                    <img src={"logout.svg"}/>
                                </div>
                            </a>
                        </div>

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

                    <div id={"listMenu"}>
                        <a href={"/HomePageLogged"}><div className={"mobileMenuButton"}>Strona Główna</div></a>
                        <a href={"/CategoryLogged"}><div className={"mobileMenuButton"}>Historia</div></a>
                        <div className={"mobileMenuButton"}>Komiksy</div>
                        <div className={"mobileMenuButton"}>Romanse</div>
                        <div className={"mobileMenuButton"}>Science fiction i fantasy</div>
                        <a href={"SiteBookOther"}><div className={"mobileMenuButton"}>Inne</div></a>
                    </div>
                </div>

            </div>
        )
    }
}