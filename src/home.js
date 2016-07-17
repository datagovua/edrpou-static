import React from 'react';
import Companies from './companies';

export class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <p>ЄДР API</p>

        <Companies pageSize="10" />
      </div>
    );
  }
}
