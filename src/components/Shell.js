import React, { Component } from 'react';
import { Header } from './Header'
export default class Shell extends Component {


  render(props) {
    return (
        <section data-list={this.props.dataList}>
            <Header dataList={[...this.props.dataList]} title="Shopping List"/>
            <main className="main">                
                <div className="card cardTemplate weather-forecast" >
                    {this.props.children}
                </div>
            </main>
        </section>
     )
   }
}
