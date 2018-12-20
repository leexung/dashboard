// https://api.bitbucket.org/2.0/repositories/mataria/yulsaria/pullrequests
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// this simple component for react using react hook
function NumberOfPR() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const a = async() => {
      // const result = await fetch('http://hn.algolia.com/api/v1/search?query=redux')
      const response = await fetch('https://api.bitbucket.org/2.0/repositories/mataria/yulsaria/pullrequests');
      const json = await response.json();
      setData(json);
    };
    a();
  }, []);

  return (
    <ul>
      {data.values && data.values.map(item => (
        <li key={item.author.display_name}>
          <a>Author {item.author.display_name}   </a>
          <a>Description: {item.description}</a>
        </li>
      ))}
    </ul>
  );
}

export default NumberOfPR;
