import React, { Component } from 'react';

import { Card, CardContent } from '@material-ui/core';

export default class ExampleWrapperSimple extends Component {
  render() {
    return (
      <Card className="card-box mb-4">
        <div className="card-header">
          <div className="card-header--title font-size-md font-weight-bold py-2">
            <b className="font-size-md">{this.props.sectionHeading}</b>
          </div>
        </div>
        <CardContent className="p-3">{this.props.children}</CardContent>
      </Card>
    );
  }
}
