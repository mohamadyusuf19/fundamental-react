import React from 'react';
import './Header.styles.scss';

const pondokIcon = require('../../assets/pondok_programmer.png')

function Header({ onPressPrograms, onPressStudents, onPressScholarship }) {
    return (
        <div className="header">
            <div className="top-header">
                <div className="top-header1">
                    <p className="text-header" onClick={onPressPrograms}>Programs</p>
                    <p className="text-header" onClick={onPressStudents}>Students</p>
                    <p className="text-header" onClick={onPressScholarship}>Scholarship</p>
                </div>
                <div className="top-header2">
                    <img className="avatar" src={pondokIcon} alt="pondok" />
                </div>
                <div className="top-header3">
                    <div className="button">
                        <p className="text-header3">DAFTAR SEKARANG</p>
                    </div>                    
                </div>
            </div>
            <div className="center-header">
                <p className="center-text1" >Menjadi Full Stack Web Developer dalam 12 minggu</p>
                <p className="center-text2">Kelas Pemrograman Full Stack Developer di Yogyakarta, Indonesia</p>
            </div>               
        </div>
    )
}

export default Header;