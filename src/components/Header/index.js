import React from 'react';
import './Header.styles.scss';

function Header() {
    return (
        <div className="header">
            <div className="top-header">
                <div className="top-header1">
                    <p className="text-header">Header1</p>
                </div>
                <div className="top-header2">
                    <p>Header2</p>
                </div>
                <div className="top-header3">
                    <p>Header3</p>
                </div>
            </div>
        </div>
    )
}

export default Header;