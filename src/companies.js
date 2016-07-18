import React from "react";
import { Link } from 'react-router'
import { connect } from "react-apollo";
import gql from "apollo-client/gql";

const pageSize = 30;

const query = gql`
query getCompanies($pageSize: Int!, $pageId: String) {
  companies(first: $pageSize, after: $pageId) {
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

const variables = {
  pageSize,
  pageId: undefined
};

const CompanyRow = ({company}) => {
  return (
    <li>
      <Link to={ `/company/${company.edrpou}` } style={{}} activeStyle={{}}>
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
    return (
      <ul>
        { companyRows }
      </ul>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    companies: state.companies,
  };
}

function mapQueriesToProps({ ownProps, state }) {
  return {
    data: {
      query,
      variables,
      forceFetch: false,
      returnPartialData: false,
    },
  };
};

const CompaniesWithData = connect({
  mapQueriesToProps,
  mapStateToProps
})(Companies);

export default CompaniesWithData;
