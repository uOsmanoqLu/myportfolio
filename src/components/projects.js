import React, {Component} from "react";
import {Tabs, Tab, Grid, Cell} from "react-mdl";
import ReactPage from "./Projects/react";
import NetMvc from "./Projects/netmvc";
import MongoDb from "./Projects/mongodb";
import NodeJs from "./Projects/node";

class Projects extends Component {

    constructor(props){
        super(props);
        this.state = {
            activeTab:0
        }
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(<ReactPage />);
        }
        else if(this.state.activeTab === 1){
            return(
                <NetMvc />
            );
        }
        else if(this.state.activeTab === 2){
            return(
                <MongoDb />
            );
        }
        else if(this.state.activeTab === 3){
            return(
                <NodeJs />
            );
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>{this.setState({activeTab:tabId})}} ripple>
                    <Tab>React</Tab>
                    <Tab>.NET MVC</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>NodeJS</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div classame="content">{this.toggleCategories()}</div>
                    </Cell>    
                </Grid>
            </div>
        );
    }
}

export default Projects;