import React from "react";
import { Link } from 'react-router'
import { graphql } from "react-apollo";
import gql from "graphql-tag";


const query = gql`
query getCompanies($pageSize: Int!, $after: String, $before: String) {
  companies(first: $pageSize, after: $after, before: $before) {
    edges {
      cursor
      node {
        id,
        officialName,
        edrpou
      }
    }
  },
}`;


const CompanyRow = ({company}) => {
  return (
    <li>
      <Link to={ `/organizations/${company.edrpou}` } style={{}} activeStyle={{}}>
        { company.officialName }
      </Link>
    </li>
  );
}

class Companies extends React.Component {

  render() {
    if(!this.props.data || this.props.data.loading) {
      return <p>Завантажується...</p>
    }
    if(this.props.data.errors) {
      let renderErrors = this.props.data.errors.map((error, key) => {
        return <p key={key}>{error.message}</p>;
      });
      return <p>Помилка завантаження... { renderErrors }</p>
    }
    let companies = (!this.props.data.loading && this.props.data.companies.edges) || [];
    let companyRows = companies.map((company) => {
      return <CompanyRow company={ company.node } key={ company.cursor } />;
    });
    let firstCursor = companies[0].cursor;
    let lastCursor = companies[companies.length - 1].cursor;
    return (
      <div>
        <ul>
          { companyRows }
        </ul>
        <div style= {{paddingTop: "2em"}}>
          <LinkButton query={{ before: firstCursor }} name="Назад" />
          <LinkButton query={{ after: lastCursor }} name="Далі" />
        </div>
      </div>
    );
  }
}

const LinkButton = ({query, name}) => (
  <Link to={{ pathname: '/organizations', query }}>
    <div style={{ display: "inline", marginTop: "1em", marginRight: "1em", padding: "1em", textAlign: "center", border: "1px solid rgb(152, 34, 121)", borderRadius: "4px" }}>
      {name}
    </div>
  </Link>
);

const CompaniesWithData = graphql(query, {
  options: (ownProps) => {
    const pageSize = 15;
    const variables = {
      pageSize,
      after: ownProps.query && ownProps.query.after,
      before: ownProps.query && ownProps.query.before
    };
    return {
      variables,
      forceFetch: false,
      returnPartialData: false,
    }
  }
})(Companies);

export default CompaniesWithData;
