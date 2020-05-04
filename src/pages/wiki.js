import React from 'react'
import Layout from "../components/layout"
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 15px;
    line-height: 20px; 
    span {
        font-size: 11px;
    }
    h3 {
        color: rgb(3, 148, 252);
        font-weight: 700;
        margin: 30px 0; 
    }

    ul li {
        display: block;
        margin: 20px 0;
    }
`;

const wiki = () => {
    return (
        <Layout>
            <Wrapper>
                <span>Information from <a href="https://ncov2019.live/wiki" target="_blank">ncov2019.live</a></span>
                <h3>What's the COVID-19?</h3>
                <p>2019 Novel Coronavirus (2019-nCoV) is a virus (more specifically, a coronavirus) identified as the cause of an outbreak of respiratory illness first detected in Wuhan, China.
    Early on, many of the patients in the outbreak in Wuhan, China reportedly had some link to a large seafood and animal market, suggesting animal-to-person spread.
    However, a growing number of patients reportedly have not had exposure to animal markets, indicating person-to-person spread is occurring.
    The name coronavirus is derived from the Latin corona, meaning "crown" or "halo", which refers to the characteristic appearance reminiscent of a crown.</p>
        <h3>Infection</h3>
        <ul>
            <li>The main route of transmission is respiratory droplets and close contact.</li>
            <li>When you sneeze or cough, you send out droplets of fluid from your nose and mouth.</li>
            <li>Those droplets can carry infections, and when they enter someone else's enter the eyes, nose or mouth, the infection can make them sick. This is the way the flu and many viruses are spread.</li>
            <li>Most often, you need to be close to the person (within 6 feet) for it to spread this way.</li>
            <li>There is the possibility of aerosol transmission when exposed to high concentration aerosol for a long time in a relatively closed environment.</li>
            <li>The WHO has stated that the risk of spread from someone without symptoms is "very low" and that fecal transmission is "low".</li>
        </ul>
        <h3>Myths</h3>
        <ul>
            <li>COVID-19 virus can be transmitted in areas with hot and humid climates.</li>
            <li>Cold weather and snow CANNOT kill the new coronavirus.</li>
            <li>Taking a hot bath does not prevent the new coronavirus disease.</li>
            <li>The new coronavirus CANNOT be transmitted through mosquito bites.</li>
            <li>Are hand dryers effective in killing the new coronavirus? No. Hand dryers are not effective in killing the 2019-nCoV.</li>
            <li>Can an ultraviolet disinfection lamp kill the new coronavirus? UV lamps should not be used to sterilize hands or other areas of skin as UV radiation can cause skin irritation.</li>
            <li>Can spraying alcohol or chlorine all over your body kill the new coronavirus? No. Spraying alcohol or chlorine all over your body will not kill viruses that have already entered your body.</li>
            <li>Do vaccines against pneumonia protect you against the new coronavirus? No. Vaccines against pneumonia, such as pneumococcal vaccine and Haemophilus influenza type B (Hib) vaccine, do not provide protection against the new coronavirus.</li>
            <li>Can regularly rinsing your nose with saline help prevent infection with the new coronavirus? No. There is no evidence that regularly rinsing the nose with saline has protected people from infection with the new coronavirus.</li>
            <li>Can eating garlic help prevent infection with the new coronavirus? Garlic is a healthy food that may have some antimicrobial properties. However, there is no evidence from the current outbreak that eating garlic has protected people from the new coronavirus.</li>
            <li>Are antibiotics effective in preventing and treating the new coronavirus? No, antibiotics do not work against viruses, only bacteria.</li>
        </ul>
        </Wrapper>
        </Layout>
    )
}

export default wiki
