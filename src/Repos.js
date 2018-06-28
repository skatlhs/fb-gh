import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { createStore } from 'react-redux';
import './App.css';

const Repo = ({ repo }) =>
  <div>
    <div className="reponame">
      {repo.name}
    </div>
    
  <div className="repodescription">
        {repo.description}
    </div>

  <div className="repolanguage">
        {repo.language}
    </div>

  <div className="repostars">
        Stars: {repo.watchers_count}
    </div>
  </div>
;

export default class FBRepo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    axios.get(
        window.encodeURI(
          `https://api.github.com/search/repositories?q=facebook+&sort=stars&order=desc`,
        ),
      ).then(response => {
        const repos = response.data.items;
        this.setState({
          repos,
          loading: false,
        });
      }).catch(error => {
        this.setState({
          error: error,
          loading: false,
        });
      });
  }

  renderLoading() {
    return (
      <div>
       Loading repositories
      </div>
    );
  }

  ghList() {
    const { error, repos } = this.state;
    return (
        <div>
          <div className="repodivider">
              {repos.map((repo) =>
               <div className="repocard"> 
                   <Repo repo={repo} />
                </div>
              )}    
          </div>
        </div>
    );
  }

  render() {
    return this.state.loading ? 
    this.renderLoading() : 
    this.ghList();
  }
}
