import React from 'react';
import Helmet from 'react-helmet';

import Companies from './companies';


export const Organizations = (props) => (
  <Section name="Організації">
    <Helmet
      title="Організації"
      meta={[
        {"name": "robots", "content": "noindex, follow"}
      ]}
    />
    <Companies pageSize="10" query={props.location.query} />
  </Section>
);

export const Section = ({name, children}) => (
  <div className="section">
    { name ? <h3>{name}</h3> : null }
    {children}
  </div>
);

export const OrganizationsTemplate = ({children}) => (
  <div className="container">
    <div className="steps">
      <ul>
        <li>
          {children}
        </li>
      </ul>
    </div>
  </div>
);
