import React from 'react';
import TopLogged from '../TopLogged/TopLogged';
import MenuMyOrders from '../MenuMyOrders/MenuMyOrders';
import './EditAuctionStyle.css';


export default class AddAuction extends React.Component {

    AddAuciton(){
        document.getElementById('marginTop').scrollIntoView();
        document.getElementById('informationChangeAccountInfromations').style.display='block';
    }

    ok(){
        document.getElementById('informationChangeAccountInfromations').style.display='none';
    }

    DeleteAuction(){
        document.getElementById('marginTop').scrollIntoView();
        document.getElementById('DeleteAuction').style.display='block';
    }

    no(){
        document.getElementById('DeleteAuction').style.display='none';
    }

    yes(){
        document.getElementById('DeleteAuction').style.display='none';
        document.getElementById('DeleteAuctionInformation').style.display='block';
    }

    render() {
        return (
            <div>
                <div id={'marginTop'}></div>
                <TopLogged />
                <MenuMyOrders />

                <div className={"MyOrdersHeadTxt"}>Edytowanie ogłoszenia</div>

                <div className={"headBookAdd"}>

                    <div id={"informationChangeAccountInfromations"}>
                        Pomyślnie edytowano ogłoszenie.
                        <div className={"ok"} onClick={this.ok}>OK</div>
                    </div>

                    <div id={"DeleteAuction"}>
                        Na pewno chcesz usunąć ogłoszenie?
                        <div className={"buttonsConfirmation"}>
                            <div className={"yes"} onClick={this.yes}>Tak</div>
                            <div className={"no"} onClick={this.no}>Nie</div>
                        </div>
                    </div>

                    <div id={"DeleteAuctionInformation"}>
                        Pomyślnie usnięto ogłoszenie.
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

                            <div className={"selectEditImageAuction"}>
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


                    <div className={"buttonsEditAuctionBottom"}>
                        <div className={"buttonDeleteAuction"} onClick={this.DeleteAuction}>
                            Usuń ogłoszenie
                        </div>
                        <div className={"buttonEditAuction"} onClick={this.AddAuciton}>
                            Edytuj ogłoszenie
                        </div>
                    </div>



                </div>
            </div>

        )
    }
}