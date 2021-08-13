import React from 'react';
import Top from '../Top/Top';
import Menu from '../Menu/Menu';
import './LogoutStyle.css';

export default class Logout extends React.Component {
    render() {
        return (
            <div>
                <Top />
                <Menu />

                <div className={"headLogout"}>
                    Pomyślnie wylogowano z konto.
                    <a href={"/"}><div className={"buttonOk"}>OK</div></a>
                </div>

            </div>
        )
    }
}