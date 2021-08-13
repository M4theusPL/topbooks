import React from 'react';
import TopLogged from '../TopLogged/TopLogged';
import MobileSearch from '../MobileSearch/MobileSearch';
import MenuLogged from '../MenuLogged/MenuLogged';
import ScrollContainer from 'react-indiana-drag-scroll';
import './SiteBookLoggedStyle.css';


export default class SiteBookLogged extends React.Component {

    checkOrder(){
        document.getElementById('reportOrder').style.display = 'none';
        document.getElementById('confirmationOrder').style.display = 'flex';
    }

    render() {
        return (
            <div>
                <TopLogged />
                <MobileSearch />
                <MenuLogged />
                <div className={"headSiteBookLogged"}>

                    <div className={"frame"}>
                        <img src={"book.png"} />
                        <div className={"bookDescriptionsAndButton"}>

                            <div className={"bookDescriptions"}>
                                <div className={"bookTitle"}>
                                    Tytuł książki
                                </div>

                                <div className={"bookDescription"}>
                                    Autorzy książki: Jan Kowalski
                                </div>
                                <div className={"bookDescription"}>
                                    Wydawnictwo: XYZ
                                </div>
                                <div className={"bookDescription"}>
                                    Rok wydania: 2010
                                </div>
                                <div className={"bookDescription"}>
                                    Kod kreskowy (EAN): 9788378879343
                                </div>

                            </div>

                            <div id={"reportOrder"} onClick={this.checkOrder}>
                                Zgłoś chęć odebrania
                            </div>


                            <div id={"confirmationOrder"}>
                                <img src={"check_circle.svg"}/> Zgłoszono chęć odebrania książki
                            </div>



                        </div>

                        <div className={"informationAboutLocation"}>
                            <div className={"informationUser"}>
                                <img src={"userbig.svg"}/>
                                <div className={"informationUserTxt"}>
                                    Jan
                                </div>
                            </div>

                            <div className={"telephoneUser"}>
                                Telefon: 123456789
                            </div>

                            <div className={"location"}>
                                Lokalizacja: Władysława Wareńczyka 3,<br /> 35-612 Rzeszów
                            </div>

                            <div className={"map"}>
                                <img src={"map.png"}/>
                            </div>

                        </div>


                    </div>

                    <div className={"moreBooksUser"}>Więcej książek od Jan</div>
                    <ScrollContainer className="scroll-container" hideScrollbars={"false"}>
                    <div className={"listBooks"}>

                            <div className={"book"}>
                                <img src={"ksiazka.png"} />
                                <div className={"descriptions"}>
                                    <div className={"title"}>Tytuł książki</div>
                                    <div className={"description"}>Autorzy książki</div>
                                    <div className={"description"}>Wydawnictwo</div>
                                    <div className={"description"}>Rok wydania</div>
                                    <div className={"description"}>Kod EAN</div>
                                </div>
                            </div>
                            <div className={"book"}>
                                <img src={"ksiazka.png"} />
                                <div className={"descriptions"}>
                                    <div className={"title"}>Tytuł książki</div>
                                    <div className={"description"}>Autorzy książki</div>
                                    <div className={"description"}>Wydawnictwo</div>
                                    <div className={"description"}>Rok wydania</div>
                                    <div className={"description"}>Kod EAN</div>
                                </div>
                            </div>
                            <div className={"book"}>
                                <img src={"ksiazka.png"} />
                                <div className={"descriptions"}>
                                    <div className={"title"}>Tytuł książki</div>
                                    <div className={"description"}>Autorzy książki</div>
                                    <div className={"description"}>Wydawnictwo</div>
                                    <div className={"description"}>Rok wydania</div>
                                    <div className={"description"}>Kod EAN</div>
                                </div>
                            </div>
                            <div className={"book"}>
                                <img src={"ksiazka.png"} />
                                <div className={"descriptions"}>
                                    <div className={"title"}>Tytuł książki</div>
                                    <div className={"description"}>Autorzy książki</div>
                                    <div className={"description"}>Wydawnictwo</div>
                                    <div className={"description"}>Rok wydania</div>
                                    <div className={"description"}>Kod EAN</div>
                                </div>
                            </div>
                    </div>
                    </ScrollContainer>

                    <div className={"suggestionsTxtLogged"}>Propozycje z tego samego gatunku</div>
                        <ScrollContainer className="scroll-container" hideScrollbars={"false"}>
                    <div className={"listBooks"}>

                            <div className={"book"}>
                                <img src={"ksiazka.png"} />
                                <div className={"descriptions"}>
                                    <div className={"title"}>Tytuł książki</div>
                                    <div className={"description"}>Autorzy książki</div>
                                    <div className={"description"}>Wydawnictwo</div>
                                    <div className={"description"}>Rok wydania</div>
                                    <div className={"description"}>Kod EAN</div>
                                </div>
                            </div>
                            <div className={"book"}>
                                <img src={"ksiazka.png"} />
                                <div className={"descriptions"}>
                                    <div className={"title"}>Tytuł książki</div>
                                    <div className={"description"}>Autorzy książki</div>
                                    <div className={"description"}>Wydawnictwo</div>
                                    <div className={"description"}>Rok wydania</div>
                                    <div className={"description"}>Kod EAN</div>
                                </div>
                            </div>
                            <div className={"book"}>
                                <img src={"ksiazka.png"} />
                                <div className={"descriptions"}>
                                    <div className={"title"}>Tytuł książki</div>
                                    <div className={"description"}>Autorzy książki</div>
                                    <div className={"description"}>Wydawnictwo</div>
                                    <div className={"description"}>Rok wydania</div>
                                    <div className={"description"}>Kod EAN</div>
                                </div>
                            </div>
                            <div className={"book"}>
                                <img src={"ksiazka.png"} />
                                <div className={"descriptions"}>
                                    <div className={"title"}>Tytuł książki</div>
                                    <div className={"description"}>Autorzy książki</div>
                                    <div className={"description"}>Wydawnictwo</div>
                                    <div className={"description"}>Rok wydania</div>
                                    <div className={"description"}>Kod EAN</div>
                                </div>
                            </div>
                            <div className={"book"}>
                                <img src={"ksiazka.png"} />
                                <div className={"descriptions"}>
                                    <div className={"title"}>Tytuł książki</div>
                                    <div className={"description"}>Autorzy książki</div>
                                    <div className={"description"}>Wydawnictwo</div>
                                    <div className={"description"}>Rok wydania</div>
                                    <div className={"description"}>Kod EAN</div>
                                </div>
                            </div>
                            <div className={"book"}>
                                <img src={"ksiazka.png"} />
                                <div className={"descriptions"}>
                                    <div className={"title"}>Tytuł książki</div>
                                    <div className={"description"}>Autorzy książki</div>
                                    <div className={"description"}>Wydawnictwo</div>
                                    <div className={"description"}>Rok wydania</div>
                                    <div className={"description"}>Kod EAN</div>
                                </div>
                            </div>
                            <div className={"book"}>
                                <img src={"ksiazka.png"} />
                                <div className={"descriptions"}>
                                    <div className={"title"}>Tytuł książki</div>
                                    <div className={"description"}>Autorzy książki</div>
                                    <div className={"description"}>Wydawnictwo</div>
                                    <div className={"description"}>Rok wydania</div>
                                    <div className={"description"}>Kod EAN</div>
                                </div>
                            </div>
                            <div className={"book"}>
                                <img src={"ksiazka.png"} />
                                <div className={"descriptions"}>
                                    <div className={"title"}>Tytuł książki</div>
                                    <div className={"description"}>Autorzy książki</div>
                                    <div className={"description"}>Wydawnictwo</div>
                                    <div className={"description"}>Rok wydania</div>
                                    <div className={"description"}>Kod EAN</div>
                                </div>
                            </div>
                    </div>
                        </ScrollContainer>

                    <div className={"bottomSiteBookLogged"}></div>

                </div>
            </div>

        )
    }
}