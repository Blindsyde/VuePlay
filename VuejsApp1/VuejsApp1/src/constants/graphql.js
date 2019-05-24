import gql from 'graphql-tag'

export const ALL_DEVICES_QUERY = gql`
  {
  devices {
    DeviceId
    Location
    Name
    UserId
  }
  users {
    FirstName
    LastName
    EmailAddress
    UserId
  }
}
`