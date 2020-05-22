
import React, { Fragment, Component } from 'react';
import ReactMarkdown from 'react-markdown';

import source from '../custom/text.md';

class WhatsNew extends Component {
  state = {
    post: null,
  }

  componentDidMount() {
    fetch(source)
      .then(res => res.text())
      .then(post => this.setState((state) => ({ ...state, post })))
      .catch((err) => console.error(err));
  }

  render() {
    const { post } = this.state;

    return (
      <Fragment>
        <section className="hero">
          ... header stuff
        </section>
        <section className="section">
          <div className="container">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <ReactMarkdown source={post} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default WhatsNew;
view rawsinglepost.jsx hosted with ❤ by GitHub