import React from 'react';
import TopAdminPanel from '../TopAdminPanel/TopAdminPanel';
import MenuAdminPanel from '../MenuAdminPanel/MenuAdminPanel';
import './EditAuctionAdminStyle.css';


export default class EditAuctionAdmin extends React.Component {

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
                <TopAdminPanel />
                <MenuAdminPanel />
                <div id={"marginTop"}></div>
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
                        <a href={"/Auctions"}>
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


                    <div className={"buttonsEditAuctionAdmin"}>
                        <a href={"/Auctions"}>
                            <div className={"buttonBack"}>
                                <img src={"back.svg"}/>
                            </div>
                        </a>
                        <div className={"buttonsEditAuctionAdminCeneter"}>
                            <div className={"buttonDeleteAuctionAdmin"} onClick={this.DeleteAuction}>
                                Usuń ogłoszenie
                            </div>
                            <div className={"buttonEditAuctionAdmin"} onClick={this.AddAuciton}>
                                Edytuj ogłoszenie
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        )
    }
}