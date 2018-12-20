// https://api.bitbucket.org/2.0/repositories/mataria/yulsaria/pullrequests
import React, { useState, useEffect } from 'react';
import basicAuthHeader from 'helpers/basicAuthen';

// import axios from 'axios';
// this simple component for react using react hook
function NumberOfBug() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const a = async() => {
      const authKey = {
        username: 'mr.xxx@xxx.xxx',
        password: 'bZZGpNeWMVzdgxyqr9TB'
      };
      const opts = authKey ? { headers: basicAuthHeader(authKey) } : {};
      const response = await fetch(
        'https://yulsaria.atlassian.net/rest/api/2/search?jql=project%20%3D%20YUL%20AND%20issuetype%20%3D%20Bug%20ORDER%20BY%20Rank%20ASC',
        opts
      );
      const json = await response.json();
      setData(json);
    };
    a();
  }, []);

  return (
    <ul>
      {data.issues &&
        data.issues.map(item => (
          <li key={item.id}>
            <a>name {item.fields.summary} </a>
            <a>updated: {item.fields.updated}</a>
          </li>
        ))}
    </ul>
  );
}

export default NumberOfBug;
