// TwitterContainer.js
import React, { useEffect } from "react";
import { Timeline, Hashtag } from 'react-twitter-widgets'

const TwitterContainer = (props) => {
  useEffect(() => {
    console.log(props)
    
  }, [props.username]);

  return (
    <Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: props.username
    }}
    onLoad={() => console.log('Timeline is loaded!')}
  />
  );
};

export default TwitterContainer;
