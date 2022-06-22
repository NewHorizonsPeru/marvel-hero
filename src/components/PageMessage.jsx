import React from 'react';

class PageMessage extends React.Component {
  render() {
    return (
      <div className="container">
        <br />
        <div className="row">
          <h3>{this.props.message}</h3>
        </div>
      </div>
    );
  }
}

export default PageMessage;
