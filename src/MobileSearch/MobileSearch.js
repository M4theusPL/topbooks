import React from 'react';
import './MobileSearchStyle.css';

export default class MobileSearch extends React.Component {

    render() {
        return (
            <div className={"headMobileSearch"}>

                <div className={"searchMobile"}>
                    <input type={"text"} placeholder={"Wpisz tytuł, autora..."}/>
                    <button type={"button"}><img src={"./search.svg"} /></button>
                </div>

            </div>
        )
    }
}