import React from 'react';
import Top from '../Top/Top';
import Menu from '../Menu/Menu';
import NewBooks from '../NewBooks/NewBooks';
import MobileSearch from '../MobileSearch/MobileSearch';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Top />
                <Menu />
                <MobileSearch />
                <NewBooks />
            </div>
        )
    }
}