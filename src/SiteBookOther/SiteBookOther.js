import React from 'react';
import Top from '../Top/Top';
import Menu from '../Menu/Menu';
import MobileSearch from '../MobileSearch/MobileSearch';
import './SiteBookOtherStyle.css';


export default class SiteBookOtherStyle extends React.Component {
    render() {
        return (
            <div>
                <Top />
                <Menu />
                <MobileSearch />

                <div className={"frameOther"}>
                    <div className={"buttonsOther"}>
                        <div className={"buttonOther"}>Beletrystyka i literatura</div>
                        <div className={"buttonOther"}>Biografie i wspomnienia</div>
                        <div className={"buttonOther"}>Biznes i inwestycje</div>
                        <div className={"buttonOther"}>Dzieci</div>
                        <div className={"buttonOther"}>Gotowanie, potrawy i wina</div>
                        <div className={"buttonOther"}>Komputery i technika</div>
                        <div className={"buttonOther"}>Kryminały i thrillery</div>
                        <div className={"buttonOther"}>Polityka i aktualności</div>
                        <div className={"buttonOther"}>Prawo</div>
                        <div className={"buttonOther"}>Religia i duchowość</div>
                        <div className={"buttonOther"}>Sztuka i rozrywka</div>
                        <div className={"buttonOther"}>Zdrowie, umysł i ciało</div>
                        <div className={"buttonOther"}>Samorozwój</div>
                    </div>
                </div>

            </div>

        )
    }
}