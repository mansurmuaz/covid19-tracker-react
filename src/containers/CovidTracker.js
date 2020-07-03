import React, {Component} from 'react';
import Header from '../components/Header'
import WorldStats from "../components/WorldStats";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import CountryStats from "../components/CountryStats";

class CovidTracker extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Container>
                    <WorldStats/>
                    <Divider variant={'middle'}/>
                    <CountryStats/>
                </Container>
            </div>
        )
    }
}

export default CovidTracker;