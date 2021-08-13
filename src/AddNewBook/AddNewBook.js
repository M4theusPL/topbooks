import React from 'react';
import TopAdminPanel from '../TopAdminPanel/TopAdminPanel';
import MenuAdminPanel from '../MenuAdminPanel/MenuAdminPanel';
import './AddNewBookStyle.css';

export default class AddNewBook extends React.Component {

    render() {
        return (
            <div>
                <TopAdminPanel />
                <MenuAdminPanel />

                <div className={"HomePageAdminPanelHeadTxt"}>Dodawanie nowej książki</div>
                <div className={"headBookAdd"}>

                    <div className={"bookInformation"}>
                        <div className={"bookTxt"}>Kod ISBN</div>
                        <div className={"bookInput"}><input type={"text"}/></div>
                    </div>

                    <div className={"buttonsAddBook"}>
                        <a href={"/HomePageAdminPanel"}>
                            <div className={"buttonBack"}>
                                <img src={"back.svg"}/>
                            </div>
                        </a>
                        <a href={"/AddNewBookManual"}><div className={"buttonAddBookManual"}>Dodaj ręcznie</div></a>
                        <a href={"/AddNewBookGoogle"}><div className={"buttonAddBookGoogle"}>Szukaj w Google</div></a>
                    </div>
                </div>



            </div>
        )
    }
}