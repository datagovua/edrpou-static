import React from "react";
import ReactList from "react-list";
import { connect } from "react-apollo";
import gql from "apollo-client/gql";

const pageSize = 30;

const query = gql`
query getCompanies($pageSize: Int!) {
  companies(first: $pageSize) {
    edrpou,
    officialName
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
    if(this.props.data.errors) {
      let renderErrors = this.props.data.errors.map((error, key) => {
        return <p key={key}>{error.message}</p>;
      });
      return <p>Помилка завантаження... { renderErrors }</p>
    }
    let companies = (!this.props.data.loading && this.props.data.companies) || [];
    let companyRows = companies.map((company, key) => {
      return <CompanyRow company={ company } key={key} />;
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
