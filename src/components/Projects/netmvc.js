import React, {Component} from "react";
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from "react-mdl";

class NetMvc extends Component {

    render(){
        return(
            <div className="projects-grid">
                    {/* Project 1*/}
                    <Card shadow={0} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                            background: 'url(https://fixx-it.nl/Portals/0/Images/fixxit/icon-aspnetmvc.png) center / cover'}}>
                            .NET MVC Project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2*/}
                    <Card shadow={0} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                            background: 'url(https://fixx-it.nl/Portals/0/Images/fixxit/icon-aspnetmvc.png) center / cover'}}>
                            .NET MVC Project #2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3*/}
                    <Card shadow={0} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                            background: 'url(https://fixx-it.nl/Portals/0/Images/fixxit/icon-aspnetmvc.png) center / cover'}}>
                            .NET MVC Project #3</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
        );
    }
}

export default NetMvc;