import React, { Component } from 'react';
import Header from '../../components/Header';
import './Home.styles.scss';
import Silabus from '../../components/Silabus';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const comtelindoIcon = require('../../assets/comtelindo.png')
const zahirIcon = require('../../assets/zahir.png')
const qwordsIcon = require('../../assets/qwords.png')
const telkomIcon = require('../../assets/telkom.png')
const bengkelDakwahIcon = require('../../assets/bengkel_dakwah.jpeg')

class Home extends Component {    
    constructor() {
        super()
        this.setPrograms = this.setPrograms.bind(this)
        this.setStudents = this.setStudents.bind(this)
        this.state = {
            programs: false,
            students: false
        }
    }

    setPrograms() {        
        this.setState({ programs: !this.state.programs, students: false })               
    }

    setStudents() {        
        this.setState({ students: !this.state.students, programs: false })    
    }    

    render() { 
        const { programs, students } = this.state        
        return ( 
            <div>
                <Header
                    onPressPrograms={this.setPrograms}
                    onPressStudents={this.setStudents}                    
                />
                {
                    programs === true ? (
                        <div className="card-programs">
                            <p>Intro Programming</p>
                            <p>Front End Basics</p>
                            <p>Back End Basics</p>
                            <p>React & React Native</p>
                            <p>PHP</p>
                            <p>Java & ERP</p>
                            <p>Phyton Data Scientist</p>
                        </div>
                    ) : null
                }
                {
                    students === true ? (
                        <div className="card-students">
                            <p>Admisions</p>
                            <p>Outcome Report</p>
                            <p>Testimonials</p>
                            <p>Student Projects</p>
                        </div>
                    ) : null
                }                
                <div className="partners">
                    <img src={comtelindoIcon} className="partner-icon" alt="comtelindo" />
                    <img src={zahirIcon} className="partner-icon" alt="zahir"/>
                    <img src={qwordsIcon} className="partner-icon" alt="qwords"/>
                    <img src={telkomIcon} className="partner-icon" alt="telkom" />
                    <img src={bengkelDakwahIcon} className="partner-icon-jpeg" alt="bengkelDakwah" />
                </div>
                <Silabus/>
                <Carousel/>
                <Footer/>
            </div>
         )
    }
}
 
export default Home;