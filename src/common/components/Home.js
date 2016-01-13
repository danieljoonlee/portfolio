import React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      	<div className="posts">
  
  			<div className="post banner">
			    <h1 className="post-title">
            I am a <em>developer</em>, <em>designer</em>, and <em>problem solver</em>.
          </h1>
    			<p>
            Also I like <em>beer</em>.
            <a href="#" onClick={this.eventToggleSidebar}> Find out More</a>
          </p>

			</div>
  
		  	<div className="post clearfix">

				<h2>Technologies I build with:</h2>

				<div className="skill-item clearfix">

					<ul className="">
						<li><em>JavaScript</em></li>
						<li><em>React</em>
							<ul>
								<li><em>Redux</em></li>
							</ul>
						</li>
            <li><em>Github</em></li>
					</ul>
				</div>


				<div className="skill-item clearfix">

					<ul>
            <li><em>HTML</em></li>
						<li><em>MongoDB</em></li>
						<li><em>Node</em>
							<ul>
								<li><em>Express</em></li>
							</ul>
						</li>
					</ul>
				</div>

				<div className="skill-item clearfix">

					<ul>
						<li><em>CSS(SCSS)</em></li>
						<li><em>Webpack</em></li>
						<li><em>Jade</em></li>
						<li><em>NPM</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">

					<ul>
            <li><em>Adobe</em>
              <ul>
                <li><em>Photoshop</em></li>
                <li><em>Illustrator</em></li>
                <li><em>Indesign</em></li>
              </ul>
            </li>
					</ul>
				</div>

  			</div>

  			<div className="post clearfix">

			</div>

			<Banner />

  		</div>
  
    );
  }
}

export default Home;