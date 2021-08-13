import React from 'react';
import "./TopStyle.css";


export default class Top extends React.Component {

    pokaz() {
        document.getElementById('userNoLogged').style.display = 'none';
        document.getElementById('useractiveUserNoLogged').style.display = 'block';
        document.getElementById('panelLogin').style.display = 'block';
        document.getElementById('inputFocus').focus();

        document.onkeydown = checkKey;

        function checkKey(e) {
            e = e || window.event;

            if (e.keyCode == '13' && document.getElementById('inputFocus') === document.activeElement) {
                document.getElementById('inputFocusPassword').focus();
            }

            else if (e.keyCode == '13' && document.getElementById('inputFocusPassword') === document.activeElement) {
                window.location.href="/HomePageLogged";
            }
        }
    }

    ukryj() {
        document.getElementById('userNoLogged').style.display = 'block';
        document.getElementById('useractiveUserNoLogged').style.display = 'none';
        document.getElementById('panelLogin').style.display = 'none';

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
            <div className={"headTop"}>
                <div id={"menu"} onClick={this.showMenu}>
                    <img src={"menu.svg"}/>
                </div>
                <div id={"mobileClose"} onClick={this.hideMenu}>
                    <img src={"hide.svg"}/>
                </div>

                <a href={"/"}><div className={"logo"}>
                    TopBooks
                    </div>
                </a>

                <div className={"search"}>
                    <input type={"text"} placeholder={"Wpisz tytuł, autora..."}/>
                    <button type={"button"}><img src={"./search.svg"} /> Szukaj</button>
                </div>
                    <div className={"test"}>
                        <div className={"userAvatarNoLogged"}>
                            <div id={"userNoLogged"} onClick={this.pokaz}>
                                <img src={"./user.svg"} />
                                <div id={"userframeUserNoLogged"} ></div>
                            </div>

                            <div id={"useractiveUserNoLogged"} onClick={this.ukryj}>
                                <img src={"./user.svg"} />
                                <div id={"userframeactiveUserNoLogged"}></div>
                            </div>
                        </div>
                    </div>


                    <div id={"panelLogin"}>
                        <div className={"login"}>
                            Login <input type={"text"} id={"inputFocus"}/>
                        </div>
                        <div className={"password"}>
                            Hasło <input type={"password"} id={"inputFocusPassword"}/>
                        </div>
                        <div className={"panelLoginButtons"}>
                            <a href={"/HomePageLogged"}>
                                <div className={"buttonLogin"}>Zaloguj się</div>
                            </a>
                            <a href={"/Register"}>
                                <div className={"buttonRegister aaaa"}>Zarejestruj się</div>
                            </a>
                        </div>
                    </div>

                <div id={"listMenu"}>
                    <a href={"/"}><div className={"mobileMenuButton"}>Strona Główna</div></a>
                    <a href={"/Category"}><div className={"mobileMenuButton"}>Historia</div></a>
                    <div className={"mobileMenuButton"}>Komiksy</div>
                    <div className={"mobileMenuButton"}>Romanse</div>
                    <div className={"mobileMenuButton"}>Science fiction i fantasy</div>
                    <a href={"SiteBookOther"}><div className={"mobileMenuButton"}>Inne</div></a>
                </div>

            </div>
        )
    }
}