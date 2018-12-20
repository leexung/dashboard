import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions/numberOfPullRequest';
const mapDispatchToProps = {
  getPosts: fetchPosts
};

class TopNews extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { channels, loading } = this.props;
    let topNews = '';

    if (channels) {
      topNews = channels.hits.map((article, index) => (
        <div key={`${index}`} className='row'>
          <span>{article.title}</span>
        </div>
      ));
    }
    if (loading) {
      topNews = <h3 className='loading-indicator'>Loading ...</h3>;
    }

    return (
      <div>
        <button onClick={this.props.getPosts}>aa</button>
        {topNews}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  channels: state.numberOfPullRequest.json,
  loading: state.numberOfPullRequest.loading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNews);
