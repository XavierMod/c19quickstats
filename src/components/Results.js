import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    table {
        border: 1px solid rgba(0,0,0,0.1);
        margin: 30px 0;
        font-size: 13px;
        width: 100%;
    }

    th {
        padding: 20px;
        background-color: rgb(3, 148, 252);
        color: white;
    }

    td {
        padding: 15px;
        border-bottom: 1px solid rgba(0,0,0,0.03);
    }
`;

const NoResults = styled.div`
    font-size: 18px;
    padding: 90px;
`;

const renderResults = (results) => {
    if (results !== undefined && results.noData !== true) {
        return results.map((el, ind, arr) => {
            return (
                    <tr>
                        <td>{el.date}</td>
                        <td style={{color: 'rgb(3, 148, 252)'}}>{el.confirmed}</td> 
                        <td style={{fontWeight: 700, backgroundColor: '#ffefeb', color: 'red'}}>+{el.dailyDeaths}</td>
                        <td style={{color: 'red'}}>{el.deaths}</td>
                        <td style={{color: 'green'}}>{el.recovered}</td>
                    </tr>
            )
        })
    } else if (results.noData == true) {
    return <NoResults>Sorry, '{results.body}' has no record or is an invalid country.</NoResults>
    }
}

const Results = (props) => {
    console.log(props);
    return (
        <Wrapper>
            <table>
            <tr>
                <th>Date</th>
                <th>Confirmed</th> 
                <th>Daily Deaths</th>
                <th>Total Deaths</th>
                <th>Total Recovered</th>
            </tr>
            {renderResults(props.data)}
            </table>
        </Wrapper>
    )
}

export default Results
