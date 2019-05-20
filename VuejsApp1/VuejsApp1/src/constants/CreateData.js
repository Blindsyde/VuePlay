import gql from 'graphql-tag'

export const CREATE_ALL_DEVICES = gql`
  query devices {
    devices {
        deviceId
        deviceLocation
        deviceName
    }
  }
`