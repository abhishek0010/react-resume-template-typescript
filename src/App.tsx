import React from 'react';
import ReactGA from 'react-ga4';
import './App.css';

import $ from 'jquery'; 

import * as resumedata from './resumeData.json';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

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
    social: 
      {
        name: string,
        url: string,
        className: string,
      }[]
  },
  resume: {
    skillmessage: string,
    education:
      {
        school: string,
        degree: string,
        graduated: string,
        description: string
      }[],
    work:
      {
        company: string,
        title: string,
        years: string,
        description: string
      }[],
    skills:
      {
        name: string,
        level: string
      }[]
  },
  portfolio: {
    projects: 
      {
        title: string,
        category: string,
        image: string,
        url: string
      }[]
  },
  testimonials: {
    testimonials:
      {
        text: string,
        user: string
      }[]
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
  resumeData: ResumeData,
  navProps: NavItems[]
}
class App extends React.Component<AppProps, AppState> {

    state: AppState = {
      foo: 'bar',
      resumeData: resumedata,
      navProps: {} as NavItems[]
    };

    constructor(props: AppProps) {
      super(props);
      ReactGA.initialize('G-88NECJ3PYR');
      ReactGA.send('pageview');
      
    }

  componentDidMount(){
    // fetch('/resumeData.json')
    // .then( response => response.json())
    // .then( json => 
    //this.setState({resumeData: resumedata});
    this.setState({navProps: this.createNavProps(this.state.resumeData)});
  //   var time = 380;
  //   setTimeout(function() {
  //   $("h1.responsive-headline").fitText(1, { minFontSize: "40px", maxFontSize: "90px" });

  //   $(".smoothscroll").on("click", function(e) {
  //     e.preventDefault();
  //     var target = this.hash,
  //       $target = $(target);

  //     $("html, body")
  //       .stop()
  //       .animate(
  //         {
  //           scrollTop: $target.offset().top
  //         },
  //         800,
  //         "swing",
  //         function() {
  //           window.location.hash = target;
  //         }
  //       );
  //   });

  //   var sections = $("section");
  //   var navigation_links = $("#nav-wrap a");

  //   sections.waypoint({
  //     handler: function(event, direction) {
  //       var active_section;

  //       active_section = $(this);
  //       if (direction === "up") active_section = active_section.prev();

  //       var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

  //       navigation_links.parent().removeClass("current");
  //       active_link.parent().addClass("current");
  //     },
  //     offset: "35%"
  //   });

  //   $("header").css({ height: $(window).height() });
  //   $(window).on("resize", function() {
  //     $("header").css({ height: $(window).height() });
  //     $("body").css({ width: $(window).width() });
  //   });

  //   $(window).on("scroll", function() {
  //     var h = $("header").height();
  //     var y = $(window).scrollTop();
  //     var nav = $("#nav-wrap");

  //     if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
  //       nav.fadeOut("fast");
  //     } else {
  //       if (y < h * 0.2) {
  //         nav.removeClass("opaque").fadeIn("fast");
  //       } else {
  //         nav.addClass("opaque").fadeIn("fast");
  //       }
  //     }
  //   });

  //   $(".flexslider").flexslider({
  //     namespace: "flex-",
  //     controlsContainer: ".flex-container",
  //     animation: "slide",
  //     controlNav: true,
  //     directionNav: false,
  //     smoothHeight: true,
  //     slideshowSpeed: 7000,
  //     animationSpeed: 600,
  //     randomize: false
  //   });

  //   $("form#contactForm button.submit").click(function() {
  //     $("#image-loader").fadeIn();

  //     var contactName = $("#contactForm #contactName").val();
  //     var contactEmail = $("#contactForm #contactEmail").val();
  //     var contactSubject = $("#contactForm #contactSubject").val();
  //     var contactMessage = $("#contactForm #contactMessage").val();

  //     var data =
  //       "contactName=" +
  //       contactName +
  //       "&contactEmail=" +
  //       contactEmail +
  //       "&contactSubject=" +
  //       contactSubject +
  //       "&contactMessage=" +
  //       contactMessage;

  //     $.ajax({
  //       type: "POST",
  //       url: "inc/sendEmail.php",
  //       data: data,
  //       success: function(msg) {
  //         // Message was sent
  //         if (msg == "OK") {
  //           $("#image-loader").fadeOut();
  //           $("#message-warning").hide();
  //           $("#contactForm").fadeOut();
  //           $("#message-success").fadeIn();
  //         }
  //         // There was an error
  //         else {
  //           $("#image-loader").fadeOut();
  //           $("#message-warning").html(msg);
  //           $("#message-warning").fadeIn();
  //         }
  //       }
  //     });
  //     return false;
  //   });
  // }, time);
  }

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

  render() {
    
    console.log(this.state.navProps);
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} navProps={this.state.navProps}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
