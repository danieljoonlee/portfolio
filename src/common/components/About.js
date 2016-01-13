import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Repos from './about/Repos';

import Loader from './layout/Loader';
import Banner from './layout/Banner';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReposIfNeeded();
  }

  render () {
    const { results, isFetching, lastUpdated, error } = this.props;
    return (
      <div>

      		<Banner />

      	  <div className="about">

      	  	<h3>About Me</h3>

      	  	<p>I have been web developing since this past August.  I have concentrated heavily on JavaScript, HTML, and CSS.  Along with Nodejs, Reactjs, and MongoDB.</p> 

      	  	<p>During 2013-2014, I managed a crew of 9 in construction, and created a revenue of over 2 million dollars.</p>

      	  	<p>Afterwards I was accepted to California Polytechnic University of Pomona for a Masters program in Landscape Architecture.</p>

      	  	<p>During the summer of 2015, I found out about web development, and knew I couldnt do anything else in life.  I have devoted countless hours and sleepless nights.  Ive burned out, and got right back in.  Thats when I knew that web development is for me.</p>

	      </div>

	      <div className="repos">
	      	<h3><a href="https://github.com/danieljoonlee?tab=repositories" target="_blank">My GitHub</a> Repos</h3>
	        {isFetching && results.length === 0 &&
	          	<Loader />
	        }
	        {!isFetching && error && results.length === 0 &&
	          <h3 className="post-error">There has been an Error</h3>
	        }
	        {!isFetching && !error && results.length === 0 &&
	          <h3>Empty</h3>
	        }
	        {results.length > 0 &&
	          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
	            <Repos results={results} />
	          </div>
	        }
	      </div>

      </div>
    );
  }
}

About.propTypes = {
  results: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default About;