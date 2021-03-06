import React, { Component } from 'react';

interface TestimonialsProps{
   data: any
};

interface TestimonialsState{

};

class Testimonials extends Component<TestimonialsProps, TestimonialsState> {
  render() {

    if(Object.keys(this.props.data.testimonials).length!==0){
      var testimonials = this.props.data.testimonials.map(function(testimonials: any){
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text}</p>
               <cite>{testimonials.user}</cite>
            </blockquote>
         </li>
      })
      return (
         <section id="testimonials">
         <div className="text-container">
            <div className="row">
   
               <div className="two columns header-col">
                  <h1><span>Client Testimonials</span></h1>
               </div>
   
               <div className="ten columns flex-container">
                     <ul className="slides">
                         {testimonials}
                     </ul>
                  </div>
               </div>
            </div>
      </section>
       );
    } else { return <div/>}


  }
}

export default Testimonials;
