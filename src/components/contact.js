import React, {Component} from "react";
import {Grid, Cell, List, ListItem, ListItemContent} from "react-mdl";
import AvatarLogo from '../photos/Fred_man-512.png';

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Uğur Osmanoğlu</h2>
                        <img src={AvatarLogo}
                            alt={"avatar"}
                            style={{height:'250px'}}>
                        </img>
                        <p style={{width:'75%', margin:'auto', 'padding-top':'1em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{'font-size':'25px', 'font-weight': 'bold', 'font-family':'Oxygen'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (123) 123-1212
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{'font-size':'25px', 'font-weight': 'bold', 'font-family':'Oxygen'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        ugurosmanoqlu@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{'font-size':'25px', 'font-weight': 'bold', 'font-family':'Oxygen'}}>
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                        uOsmanoqLu
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;