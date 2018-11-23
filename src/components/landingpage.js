import React, {Component} from "react";
import {Grid, Cell} from "react-mdl";
import AvatarLogo from '../photos/avatar.png';
class Landing extends Component {
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell className="imgCell" column={1}>
                        <img src={AvatarLogo}
                            alt={"avatar"}
                            className="avatar-img">
                        </img>
                    </Cell>
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr />
                        <p>HTML/CSS | Bootstrap | JavaScript | React | Node | Express | MongoDB</p>
                        <div className="social-links">

                            {/* LinkedIn*/}
                            <a href="http://linkedin.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* GitHub*/}
                            <a href="http://github.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            {/* FreeCodeCamp*/}
                            <a href="http://linkedin.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-free-code-camp" aria-hidden="true" />
                            </a>

                            {/* Youtube*/}
                            <a href="http://youtube.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true" />
                            </a>

                        </div>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default Landing;