import React, {Component} from "react";
import {Grid, Cell, ProgressBar} from "react-mdl";

class Skills extends Component {
    render(){
        return(
            <div className="skills">
                <Grid>
                    <Cell col={12}>
                    <div style={{display:'flex'}}>
                        {this.props.skillName}
                        <ProgressBar 
                            style={{margin:'auto', width:'75%'}} 
                            progress={this.props.progressRate} />
                    </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Skills;