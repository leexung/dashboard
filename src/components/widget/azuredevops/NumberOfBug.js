import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// this simple component for react using react hook
function NumberOfBug() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const a = async() => {
      // const result = await fetch('http://hn.algolia.com/api/v1/search?query=redux')
      const response = await fetch('http://hn.algolia.com/api/v1/search?query=redux');
      const json = await response.json();
      setData(json);
    };
    a();
  }, []);

  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default NumberOfBug;
