import React, { Component } from 'react';
import Header from './Header'
export default class Shell extends Component {


  render(props) {
    return (
        <section>
            <Header />
            <main className="main">                
                <div className="card cardTemplate weather-forecast" >
                    {this.props.children}
                </div>
            </main>
        </section>
     )
   }
}
