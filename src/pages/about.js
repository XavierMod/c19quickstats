import React from 'react'
import Layout from "../components/layout"
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 20px;
    max-width: 700px;
    margin: auto;

    h1 {
        text-align: center;
        font-weight: 700;
        color: rgb(3, 148, 252);
        font-size: 20px;
        margin-bottom: 40px;
    }

    a {
        color: rgb(3, 148, 252); 
    }

    p {
        line-height: 25px;
    }
`;

const Update = styled.div`
    margin: 20px 0;
    padding-top: 20px;
    border-top: 1px solid rgb(3, 148, 252);
    line-height: 25px;

    span {
        font-weight: 700;
        color: rgb(3, 148, 252);
    }
`;

const about = () => {
    return (
        <Layout>
            <Wrapper>
                <h1>We will defeat Covid-19.</h1>
                <p>Hi. I'm <a href="https://www.xaviermod.com">Xavier Mod</a>, a web developer based in London. I have created C-19 Quick Stats in order to show the latest Covid-19 information in the simplest way.</p>
                <br />
                <p>Would you like to contribute to this project with any ideas / improvements? <a href="mailto:hi.xavier.mod@gmail.com">Drop me an email!</a></p>

                <Update><span>Update 11 April:</span> Table view added with daily cases. Global cases added on first load. </Update>
            </Wrapper>
        </Layout>
    )
}

export default about
