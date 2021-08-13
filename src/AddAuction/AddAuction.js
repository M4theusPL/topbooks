import React from 'react';
import TopLogged from '../TopLogged/TopLogged';
import MenuMyOrders from '../MenuMyOrders/MenuMyOrders';
import MobileSearch from '../MobileSearch/MobileSearch';
import './AddAuctionStyle.css';


export default class AddAuction extends React.Component {

    AddAuciton(){
        document.getElementById('marginTop').scrollIntoView();
        document.getElementById('informationChangeAccountInfromations').style.display='block';
    }

    render() {
        return (
            <div>
                <div id={'marginTop'}></div>
                <TopLogged />
                <MenuMyOrders />
                <MobileSearch />

                <div className={"MyOrdersHeadTxt"}>Dodanie zgłoszenia</div>

                <div className={"headBookAdd"}>

                    <div id={"informationChangeAccountInfromations"}>
                        Pomyślnie edytowano informacje o koncie.
                        <a href={"/MyOrders"}>
                            <div className={"ok"}>OK</div>
                        </a>
                    </div>

                    <div className={"imageAndInformationBookAdd"}>
                        <div className={"imageBookAdd"}>
                            <img src={"image.svg"}/>
                        </div>

                        <div className={"txtInformationBookAdd"}>
                            <div className={"informationAuction"}>
                                Szukaj książki w bazie
                            </div>

                            <div className={"searchAddBook"}>
                                <input type={"text"} placeholder={"Wpisz tytuł, autora..."}/>
                                <button type={"button"}><img src={"./search.svg"} /> Szukaj</button>
                            </div>
                            <MobileSearch />

                            <div className={"txtLackBook"}>
                                W przypadku, gdy brakuje na liście książki
                                <a href={"/ApplicationNewBookToDataBase"}>
                                    <div className={"buttonLackBook"}>
                                        Zgłoś nową książkę
                                    </div>
                                </a>
                            </div>

                            <div className={"auctionAddData"}>
                                <div className={"auctionAddTxt"}>
                                    Telefon
                                </div>
                                <div className={"auctionAddInput"}>
                                    <input type={"text"}/>
                                </div>
                            </div>

                            <div className={"auctionAddData"}>
                                <div className={"auctionAddTxt"}>
                                    E-mail
                                </div>
                                <div className={"auctionAddInput"}>
                                    <input type={"text"}/>
                                </div>
                            </div>

                            <div className={"selectImageAuction"}>
                                Wybierz zdjęcie
                            </div>
                        </div>

                    </div>

                    <div className={"auctionAddDataLocation"}>
                        <div className={"auctionAddTxtLocation"}>
                            Lokalizacja
                        </div>
                        <div className={"auctionAddInputLocation"}>
                            <input type={"text"}/>
                        </div>
                    </div>

                    <div className={"mapAddAuctionLocation"}>
                        <img src={"mapbig.png"}/>
                    </div>


                    <div className={"buttonAddNewAuction"} onClick={this.AddAuciton}>
                        Dodaj nowe ogłoszenie
                    </div>


                </div>
            </div>

        )
    }
}