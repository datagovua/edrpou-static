import React from 'react';
import Companies from './companies';

export const Organizations = (props) => {
  return (
  <Section name="Організації">
    <Companies pageSize="10" query={props.location.query} />
  </Section>
  );
}


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
