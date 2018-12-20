export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const getChannel = channel => ({
  type: SELECT_CHANNEL,
  channel
});

export const requestPosts = () => ({
  type: REQUEST_POSTS
});
export const receivedPosts = json => {
  return {
    type: 'RECEIVE_POSTS',
    json: json
  };
};

export function fetchPosts() {
  return function(dispatch, getState) {
    dispatch(requestPosts());
    fetch('http://hn.algolia.com/api/v1/search?query=redux')
      .then(response => response.json(), error => console.log('An error occurred.', error))
      .then(json => {
        dispatch(receivedPosts(json));
      });
  };
}
