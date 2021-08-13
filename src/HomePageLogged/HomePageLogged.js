import React from 'react';
import TopLogged from '../TopLogged/TopLogged';
import MenuLogged from '../MenuLogged/MenuLogged';
import MobileSearch from '../MobileSearch/MobileSearch';
import NewBooksLogged from '../NewBooksLogged/NewBooksLogged';


export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <TopLogged />
                <MenuLogged />
                <MobileSearch />
                <NewBooksLogged />
            </div>
        )
    }
}