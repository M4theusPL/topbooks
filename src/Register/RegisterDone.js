import React from 'react';
import Top from '../Top/Top';
import Menu from '../Menu/Menu';
import './RegisterDoneStyle.css';

export default class RegisterDone extends React.Component {
    render() {
        return (
            <div>
                <Top />
                <Menu />

                <div className={"frameRegisterDone"}>
                    <div className={"txtRegisterDone"}>
                        Konto zostało pomyślnie stworzone.
                    </div>

                    <a href={'/'}>
                        <div className={"buttonRegisterDone"}>
                            Wróć na stronę główną
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}