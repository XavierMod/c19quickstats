import React, {Component} from "react"
import { Link } from "gatsby"
import '../index.css';
import Layout from "../components/layout"
import SEO from "../components/seo"
import axios from 'axios';
import styled from 'styled-components';
import Results from '../components/Results';
import MainGraph from '../components/graphs/MainGraph';
import Resources from '../components/Resources'
import GetCountryProfile from '../components/GetCountryProfile';

const HeaderInfo = styled.div`
  padding: 30px 0;
`;

const H1 = styled.h1`
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  margin-left: 10px;
  padding-bottom: 30px;
`;

const Description = styled.div`
  padding: 20px;
  text-align: center;
  font-size: 15px;
  line-height: 20px;
`;

const INPUT = styled.input`
  display: block;
  width: 90%;
  margin: 0 auto;
  padding: 15px;
  font-size: 15px;
`;

const Search = styled.a`
  display: block;
  width: 90%;
  padding: 15px;
  text-align: center;
  border: 1px solid rgb(3, 148, 252);
  color: rgb(3, 148, 252);
  margin: 20px auto;
  cursor: pointer;

  &:hover {
    background-color: rgb(3, 148, 252);
    color: white;
  }
`;

const Header = styled.div`
`;

const HeaderWrapper = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 0 20px;
`;

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

const CountryNews = styled.div`
  
`;

const GlobalModules = styled.div`
text-align: center;
`;

const GlobalModule = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: inline-block;
  text-align: center;
  margin: 0px 5px;
  margin-bottom: 30px;

  h1 {
    padding: 20px 60px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(0, 0, 0, 0.1);
  }

  span {
    display: block;
    padding: 20px 60px;
    font-size: 30px;
    font-weight: 700;
  }
`;

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "dailystats"
    };
  }

  componentDidMount() {
    fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const globalDeathsArr = [];
      const globalRecoveredArr = [];
      const globalConfirmedArr = [];

      for (var property in data) {
        globalDeathsArr.push(data[property].reverse()[0].deaths);
        globalRecoveredArr.push(data[property].reverse()[0].recovered);
        globalConfirmedArr.push(data[property].reverse()[0].confirmed);
      }

      console.log(globalRecoveredArr);
      
      const globalDeaths = globalDeathsArr.reduce(function(a, b) { return a + b; }, 0);
      const globalConfirmed = globalConfirmedArr.reduce(function(a, b) { return a + b; }, 0);
      const globalRecovered = globalRecoveredArr.reduce(function(a, b) { return a + b; }, 0);

      this.setState({globalDeaths: globalDeaths, globalConfirmed: globalConfirmed});
    });
  }

  getResults = (query) => {
    fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(response => response.json())
    .then(data => {
      if (data[query] !== undefined) {
        let newData = [];
        let newDataGraph = [];
        this.setState({finalQuery: query});
        data[query].forEach(({ date, confirmed, recovered, deaths }, ind, arr) =>{

          const pushDailyDeaths = () => {
            if (data[query][ind - 1] !== undefined) {
              return data[query][ind].deaths - data[query][ind - 1].deaths;
            } else {
              return 0
            }
          }

          newData.push({query, date, confirmed, recovered, deaths, dailyDeaths: pushDailyDeaths()});
          newDataGraph.push({graphDate: date, Deaths: deaths, Confirmed: confirmed, Recovered: recovered})
        }
        );
        this.setState({data: newData.reverse(), dataGraph: newDataGraph});
      } else {
        this.setState({data: {noData: true, body: query}});
      }
    });
  }

  onChange = (el) => {
    function titleCase(str) {
      var splitStr = str.toLowerCase().split(' ');
      for (var i = 0; i < splitStr.length; i++) {
          // You do not need to check if i is larger than splitStr length, as your for does that for you
          // Assign it back to the array
          splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
      }
      // Directly return the joined string
      return splitStr.join(' '); 
   }

    this.setState({query: titleCase(el.target.value)});
  }

  renderTabs = () => {
    return (
      <IndexMenu>
      <ul>
        <ListItem 
        onClick={() => this.setState({activeTab: 'dailystats'})} opacity={this.state.activeTab == 'dailystats' ? '1' : '0.4'}>Daily Stats</ListItem>
        <ListItem onClick={() => this.setState({activeTab: 'countrynews'})}
        opacity={this.state.activeTab == 'countrynews' ? '1' : '0.4'}>Country News</ListItem>
      </ul>
    </IndexMenu>
    )
  }

  render() {
    return(
      <>
      <Resources />
      <Layout>
      <SEO title="C-19 Quick Stats" />
      <Header>
        <HeaderWrapper>
          <HeaderInfo>
          <H1>Covid-19 Quick Stats</H1>
            <GlobalModules>
                <GlobalModule>
                  <h1 style={{backgroundColor: '#ffefeb'}}>Global Deaths</h1>
                  <span style={{color: 'red'}}>{this.state.globalDeaths}</span>
                </GlobalModule>
                <GlobalModule>
                  <h1>Global Confirmed</h1>
                  <span>{this.state.globalConfirmed}</span>
                </GlobalModule>
            </GlobalModules>
            <Description>Enter a country down below to check the latest COVID-19 numbers.</Description>
          </HeaderInfo>
          <div style={{maxWidth: '700px', margin: 'auto'}}>
            <INPUT placeholder="e.g. United Kingdom, France..." onChange={(el) => this.onChange(el)} type="text"></INPUT>
            <Search onClick={() => this.getResults(this.state.query)}>Search</Search>
          </div>
        </HeaderWrapper>
      </Header>
        {this.state.data !== undefined ? this.renderTabs() : null}
        {this.state.data !== undefined && this.state.activeTab == 'dailystats' ? <MainGraph data={this.state.dataGraph} /> : null}
        {this.state.data !== undefined && this.state.activeTab == 'dailystats' ? <Results data={this.state.data} /> : null}
        <CountryNews>
            {this.state.data && this.state.activeTab == 'countrynews' ? <GetCountryProfile query={this.state.finalQuery !== undefined ? this.state.finalQuery : 'no-data'}/> : null}
        </CountryNews>
      </Layout>
    </>
    )
  }
}

export default IndexPage