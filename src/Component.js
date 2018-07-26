import React from "react";
import { Query } from "react-apollo";
import { List, Icon } from "semantic-ui-react";
import gql from "graphql-tag";

export const getSiteFarmers = gql`
  query($siteId: Float!) {
    getSiteFarmers(siteId: $siteId) {
      error
      response {
        firstName
        lastName
        role
        roleName
        email
        phoneNumber
        siteId
        id
      }
    }
  }
`;

const Item = ({ farmer, handleSelectFarmer, handleFarmerModalOpen }) => (
  <List.Item key={farmer.email} onClick={() => handleSelectFarmer(farmer.id)}>
    <List.Content floated="left">
      <Icon name="user circle" />
      {`${farmer.firstName} ${farmer.lastName}`}
    </List.Content>
    <List.Content floated="right">
      <Icon
        name="ellipsis horizontal"
        onClick={() => handleFarmerModalOpen(farmer)}
      />
    </List.Content>
  </List.Item>
);

export class Component extends React.Component {
  render() {
    return (
      <List divided verticalAlign="middle">
        <Query query={getSiteFarmers} variables={{ siteId: 1 }}>
          {({ data, loading, error, refetch }) => {
            if (loading) return null;
            if (error) return null;
            // set refetch as a class property
            this.refetch = refetch;

            return data.getSiteFarmers.response
              .map(farmer => ({
                ...farmer,
                id: parseInt(farmer.id)
              }))
              .map(farmer => (
                <Item
                  farmer={farmer}
                  handleFarmerModalOpen={this.handleFarmerModalOpen}
                  handleSelectFarmer={handleSelectFarmer}
                  selectedFarmers={selectedFarmers}
                />
              ));
          }}
        </Query>
      </List>
    );
  }
}

export default Component;
