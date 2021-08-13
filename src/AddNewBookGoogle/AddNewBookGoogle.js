import React from 'react';
import TopAdminPanel from '../TopAdminPanel/TopAdminPanel';
import MenuAdminPanel from '../MenuAdminPanel/MenuAdminPanel';
import './AddNewBookGoogleStyle.css';

export default class AddNewBookGoogle extends React.Component {

    addBook(){
        document.getElementById("DeleteAuctionInformation").style.display = "block";
    }

    render() {
        return (
            <div className={"AddNewBookGoogle"}>
                <TopAdminPanel />
                <MenuAdminPanel />

                <div className={"HomePageAdminPanelHeadTxt"}>Dodawanie nowej książki</div>
                <div className={"headBookAdd"}>

                    <div id={"DeleteAuctionInformation"}>
                        Pomyślnie dodano książkę do bazy.
                        <a href={"/HomePageAdminPanel"}><div className={"ok"}>OK</div></a>
                    </div>

                    <div className={"bookInformation"}>
                        <div className={"bookTxt"}>Kod ISBN</div>
                        <div className={"bookInput"}><input type={"text"}/></div>
                    </div>

                    <div className={"buttonsAddBook"}>
                        <a href={"/AddNewBookManual"}><div className={"buttonAddBookManual"}>Dodaj ręcznie</div></a>
                        <a href={"/AddNewBookGoogle"}><div className={"buttonAddBookGoogle"}>Szukaj w Google</div></a>
                    </div>

                    <table>
                        <tr>
                            <th>Tytuł</th>
                            <td>Pan Tadeusz</td>
                        </tr>
                        <tr>
                            <th>Autor</th>
                            <td>Adam Mickiewicz</td>
                        </tr>
                        <tr>
                            <th>Wydawca</th>
                            <td>XYZ</td>
                        </tr>
                        <tr>
                            <th>Rok wydania</th>
                            <td>2019</td>
                        </tr>
                        <tr>
                            <th>ISBN</th>
                            <td>8386841087, 9788386841080</td>
                        </tr>
                    </table>


                    <div className={"buttonsAddNewBookGoogle"}>
                        <a href={"/HomePageAdminPanel"}>
                            <div className={"buttonBack"}>
                                <img src={"back.svg"}/>
                            </div>
                        </a>

                        <div className={"buttonAddNewBookGoogle"} onClick={this.addBook}>
                            Dodaj ksiażkę do bazy
                        </div>
                    </div>

                </div>



            </div>
        )
    }
}