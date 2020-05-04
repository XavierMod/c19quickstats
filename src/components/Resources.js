import React, { useState } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const QuestionIcon = styled.div`
    padding: 10px;
    border-radius: 200px;
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    margin: 20px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;

    img {
        width: 23px;
    }
`;

const ResourcesWrapper = styled.div`
    position: fixed;
    width: 100%;
    bottom: ${props => props.show};
    height: 120px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
    transition: all ease 0.4s;
    z-index: 1;

    ul li {
        display: inline-block;
        margin: 20px;
        border: 1px solid rgb(3, 148, 252);
        padding: 10px;
        color: rgb(3, 148, 252);

        a {
            text-decoration: none;
            color: rgb(3, 148, 252);
        }
    }
`;

const Resources = () => {
    const [modal, setModal] = useState(false);

    return (
        <Wrapper>
            <a target="_blank" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"><QuestionIcon>
                <img src="https://img.icons8.com/color/48/000000/ask-question.png" />
            </QuestionIcon></a>
        </Wrapper>
    )
}

export default Resources
