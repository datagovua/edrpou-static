import React from 'react';
import Companies from './companies';

export class Organizations extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="steps">
          <ul>
            <li>
              <div className="section">
                <h3>Організації</h3>
                <Companies pageSize="10" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
