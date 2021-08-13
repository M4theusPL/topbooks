import React from 'react';
import Top from '../Top/Top';
import MobileSearch from '../MobileSearch/MobileSearch';
import Menu from '../Menu/Menu';
import ScrollContainer from 'react-indiana-drag-scroll';
import './SiteBookStyle.css';


export default class SiteBook extends React.Component {
    render() {
        return (
            <div>
                <Top />
                <Menu />
                <MobileSearch />
                <div className={"headSiteBook"}>
                    
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

                            <div className={"buttonLoginInSiteBook"}>
                                Zaloguj się, aby zgłosić chęć odebrania
                            </div>

                        </div>
                    </div>

                    <div className={"suggestionsTxt"}>Propozycje z tego samego gatunku</div>

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


                </div>
            </div>

        )
    }
}