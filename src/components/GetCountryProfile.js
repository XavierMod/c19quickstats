import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import socialCountries from '../data/social-media-countries';
import TwitterContainer from './TwitterContainer';

const GetCountryProfile = (props) => {
    const [country, setCountry] = useState(props.query);

    useEffect(() => {
        return socialCountries.forEach((el, ind, arr) => {
            if (Object.keys(el)[0] == props.query) {
                if (el[props.query] !== "") {
                    console.log('SETTIN', el[props.query]);
                    setCountry(el[props.query]);
                }
            }
        })
    }, [props.query]);

    return (
        <>
            <TwitterContainer username={country} />
        </>
    )
}

export default GetCountryProfile
