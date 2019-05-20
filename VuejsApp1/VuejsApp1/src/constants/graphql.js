import gql from 'graphql-tag'

export const ALL_DEVICES_QUERY = gql`
  query devices {
    devices {
        deviceId
        deviceLocation
        deviceName
    }
  }
`