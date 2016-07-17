import React from "react";
import ReactList from "react-list";
import { connect } from "react-apollo";
import gql from "apollo-client/gql";

const pageSize = 30;

const query = gql`
query getCompanies($pageSize: Int!) {
  companies(first: $pageSize) {
    edges {
      node {
        id,
        officialName
      }
    }
  },
}`;

const variables = {
  pageSize
};

const CompanyRow = ({company}) => {
  return <li>{ company.officialName }</li>
}

class Companies extends React.Component {

  render() {
    if(!this.props.data || this.props.data.loading) {
      return <p>Завантажується...</p>
    }
    let companies = (!this.props.data.loading && this.props.data.companies.edges) || [];
    let companyRows = companies.map((edge, key) => {
      return <CompanyRow company={ edge.node } key={key} />;
    });
    return (
      <ul style={{ height: 300, overflowY: "auto"}}>
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
