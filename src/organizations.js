import React from 'react';
import Companies from './companies';

export const Organizations = () => (
  <Section name="Організації">
    <Companies pageSize="10" />
  </Section>
);

export const Section = ({name, children}) => (
  <div className="section">
    <h3>{name}</h3>
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
