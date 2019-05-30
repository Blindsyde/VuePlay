import gql from 'graphql-tag'

export const ALL_INFO_QUERY = gql`
  {
  allinfo {
    userid
    firstname
    lastname
    emailaddress
    deviceid
    devicename
    devicelocation
    deviceserialnumber
  }
}
`