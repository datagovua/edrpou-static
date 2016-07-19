import React from "react";
import { connect } from "react-apollo";
import gql from "apollo-client/gql";

import { Section } from './organizations.js'

const query = gql`
query getCompanies($organizationId: Int!) {
  companies(searchByEdrpou: $organizationId) {
    edges {
      cursor
      node {
        edrpou
        name
        officialName
        address
        mainPerson
        occupation
        status
      }
    }
  },
}`;

const Row = ({name, children}) => (
  <tr><td style={{width: "16em"}}><b>{name}</b></td><td>{children}</td></tr>
);

const Details = ({company}) => {
  return (
    <Section name={company.name || company.officialName}>
      <table>
        <tbody>
        { company.name ? <Row name="Офіційна назва: ">{ company.officialName }</Row> : null }
        <Row name="Адреса: ">{ company.address }</Row>
        { company.mainPerson ? <Row name="Уповноважена особа: ">{ company.mainPerson }</Row> : null }
        <Row name="Код ЄДРПОУ: ">{ company.edrpou }</Row>
        { company.occupation ? <Row name="Основна діяльність: ">{ company.occupation }</Row>: null }
        <Row name="Стан: ">{ company.status }</Row>
        </tbody>
      </table>
    </Section>
  );
}

class Organization extends React.Component {

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
      return <Details company={ company.node } key={ company.cursor } />;
    });
    return (
      <ul>
        { companyRows }
      </ul>
    );
  }
}

function mapQueriesToProps({ ownProps, state }) {
  let organizationId = ownProps.params.organizationId;
  let variables = { organizationId };
  return {
    data: {
      query,
      variables,
      forceFetch: false,
      returnPartialData: false,
    },
  };
};

const OrganizationWithData = connect({
  mapQueriesToProps
})(Organization);

export default OrganizationWithData;
