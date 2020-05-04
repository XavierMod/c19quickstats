import React from 'react'
import Layout from "../components/layout"
import styled from 'styled-components'

const Wrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;

const whoTweets = () => {
    return (
        <Layout>
            <Wrapper>
            <a class="twitter-timeline" href="https://twitter.com/WHO?ref_src=twsrc%5Etfw">Tweets by WHO</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </Wrapper>
        </Layout>
    )
}

export default whoTweets