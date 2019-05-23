import gql from 'graphql-tag'

export const ALL_DEVICES_QUERY = gql`
  query devices {
    devices {
        DeviceId
        Location
        Name
    }
  }
`

export const ALL_USERS_QUERY = gql`
  query users {
    users {
        FirstName
        LastName
        EmailAddress
        DeviceId
    }
  }
`