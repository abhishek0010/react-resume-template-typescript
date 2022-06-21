import React from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
//import Testimonials from './Components/Testimonials';
//import Portfolio from './Components/Portfolio';

type ResumeData = {
  main: {
    name: string,
    occupation: string,
    description: string,
    image: string,
    bio: string,
    contactmessage: string,
    email: string,
    address: {
      street: string,
      city: string,
      state: string,
      zip: string,
    },
    website: string,
    resumedownload: string,
    social: [
      {
        name: string,
        url: string,
        className: string,
      }
    ]
  },
  resume: {
    skillmessage: string,
    education: [
      {
        school: string,
        degree: string,
        graduated: string,
        description: string
      }
    ],
    work: [
      {
        company: string,
        title: string,
        years: string,
        description: string
      }
    ],
    skills: [
      {
        name: string,
        level: string
      }
    ]
  },
  portfolio: {
    projects: [
      {
        title: string,
        category: string,
        image: string,
        url: string
      }
    ]
  },
  testimonials: {
    testimonials: [
      {
        text: string,
        user: string
      }
    ]
  }
}

type NavItems = {
  name: string,
  link: string
}

interface AppProps {
};

interface AppState {

  foo: string,
  resumeData: ResumeData
}
class App extends React.Component<AppProps, AppState> {

    state: AppState = {
      foo: 'bar',
      resumeData: {} as ResumeData
    };

    constructor(props: AppProps) {
      super(props);
      ReactGA.initialize('UA-110570651-1');
      ReactGA.pageview(window.location.pathname);
    }

  componentDidMount(){
    fetch('/resumeData.json')
    .then( response => response.json())
    .then( json => {this.setState({resumeData: json});
    });
    //this.state.navProps = this.createNavProps(this.state.resumeData);
  }
/*
  createNavProps(resumeData: ResumeData):NavItems[] {
    let navProps: NavItems[] = [
      {
        name: "Home",
        link: "home"
      },
      {
        name: "About",
        link: "about"
      },
      {
        name: "Resume",
        link: "resume"
      },
    ]
    if(Object.keys(resumeData.portfolio.projects).length!==0) {
      navProps.push({name: "Portfolio", link: "portfolio"});
    }
    if(Object.keys(resumeData.testimonials.testimonials).length!==0) {
      navProps.push({name: "Testimonials", link: "testionials"});
    }
    navProps.push({name:"Contact", link: "contact"});

    return navProps;
  }
*/
  render() {
    console.log(this.state.resumeData);
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

/* Additional Fields can be added to return
<Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        */

export default App;
