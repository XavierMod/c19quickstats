import React, {Component} from 'react'
import Layout from "../components/layout"
import styled from 'styled-components'

const IndexMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;

const ListItem = styled.li`
    display: inline-block;
    padding: 20px;
    border-bottom: 5px solid rgb(3, 148, 252);
    color: rgb(3, 148, 252);
    opacity: ${props => props.opacity};
    cursor: pointer;
    margin: 0 5px;
    margin-top: 50px;
    transition: 0.2s ease all;
`;

class Map extends Component {

    state = {
        activeTab: 'BNO'
    };

    renderTabs = () => {
        return (
          <IndexMenu>
          <ul>
            <ListItem 
            onClick={() => this.setState({activeTab: 'BNO'})} opacity={this.state.activeTab == 'BNO' ? '1' : '0.4'}>BNO Map</ListItem>
            <ListItem onClick={() => this.setState({activeTab: 'CSSE'})}
            opacity={this.state.activeTab == 'CSSE' ? '1' : '0.4'}>CSSE Dashboard</ListItem>
          </ul>
        </IndexMenu>
        )
      }

    render() {
        return (
            <Layout>
                {this.renderTabs()}
                {this.state.activeTab == 'BNO' ? <iframe src="https://www.google.com/maps/d/embed?mid=1a04iBi41DznkMaQRnICO40ktROfnMfMx" width="100%" height="500px"></iframe> : null}
    
                {this.state.activeTab == 'CSSE' ? <iframe src="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6" scrolling="no" marginheight="0" class="iframe-responsive" id="video_streaming1" width="100%" height="720" frameborder="0"></iframe> : null}
            </Layout>
        )
    }

}

export default Map
