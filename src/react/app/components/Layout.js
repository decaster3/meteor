import React, {Component} from 'react';
import { Link, withRouter} from "react-router-dom";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    console.log(this.props);
    const {match, location, history} = this.props;
    console.log(history);
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}