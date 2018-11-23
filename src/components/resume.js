import React, {Component} from "react";
import {Grid, Cell} from "react-mdl";
import AvatarLogo from '../photos/avatar.png';
import Education from "./Resume/education";
import Experience from "./Resume/experience";
import Skills from "./Resume/skills";

class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src={AvatarLogo}
                                alt="avatar"
                                style={{height:'200px'}}></img>
                        </div>
                        <h2 style={{paddingTop:'2em'}}>Uğur Osmanoğlu</h2>
                        <h4 style={{color:'grey'}}>Bilgisayar Mühendisi</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width:'100%'}}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...</p>
                        <hr style={{borderTop: '3px solid #833fb2', width:'100%'}}/>
                        <h5>Adres</h5>
                        <p>Başıbüyük Mah. Eskicibağ Cad. No: 60 Maltepe / İSTANBUL</p>
                        <h5>Cep Telefonu</h5>
                        <p>(123) 123-1212</p>
                        <h5>Email</h5>
                        <p>ugurosmanoqlu@gmail.com</p>
                        <h5>Web</h5>
                        <p>www.ugurosmanoglu.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width:'100%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Eğitim</h2>
                            <Education 
                            startYear={2005}
                            endYear={2007}
                            schoolName="SDÜ Keçiborlu MYO"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia."
                            />
                            <Education 
                            startYear={2010}
                            endYear={2015}
                            schoolName="Ege Üniversitesi"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia."
                            />
                            <hr style={{borderTop: '3px solid #e22947'}}/>
                            <h2>Tecrübe</h2>
                            <Experience 
                                startYear={'11.2015'}
                                endYear={'10.2017'}
                                companyName="Vizyoneks Bilgi Teknolojileri"
                                companyDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia."
                                />
                            <Experience 
                                startYear={'10.2017'}
                                endYear={'09.2018'}
                                companyName="Agito Bilgi Teknolojileri"
                                companyDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia."
                                />
                            <Experience 
                                startYear={'09.2018'}
                                companyName="Kafein Yazılım"
                                companyDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia."
                                />
                            <hr style={{borderTop: '3px solid #e22947'}}/>
                            <h2>Yetenekler</h2>
                            <Skills 
                                skillName={".ReactJS"}
                                progressRate={75}
                                />
                            <Skills 
                                skillName={".NET MVC"}
                                progressRate={50}
                                />
                            <Skills 
                                skillName={"MongoDB"}
                                progressRate={75}
                                />
                            <Skills 
                                skillName={".NodeJS"}
                                progressRate={75}
                                />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;