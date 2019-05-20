import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
//import { setContext } from 'apollo-link-context';
import Vue from 'vue'
import VueApollo from 'vue-apollo'
import App from './App'

Vue.config.productionTip = false

const httpLink = new HttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:8080/v1/graphql'
})

/*const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = 'nMIIC/zCCAeegAwIBAgIJchED7hsOYyyfMA0GCSqGSIb3DQEBCwUAMB0xGzAZBgNV\nBAMTEmRldm5zeWRlLmF1dGgwLmNvbTAeFw0xOTA1MjAyMTMwNTdaFw0zMzAxMjYy\nMTMwNTdaMB0xGzAZBgNVBAMTEmRldm5zeWRlLmF1dGgwLmNvbTCCASIwDQYJKoZI\nhvcNAQEBBQADggEPADCCAQoCggEBAMMX3bgdU+7863H5boZH9yFOxNT9A/jx6Uy+\nOyM+8dzREvWLG1d3woMVkt2WDZxRg9zgMvnnwrApFarN8qUb082SX1/IF10VYdKm\nTJWSN3GDLWADjKZFFilmTmwmifxS78gPEFVnN6NDxwkSOAtlh1qOjHAB6wMeGwx9\nPk8j7jLaD1KQCUMyTiNz+5L4aIlYO7Uomt81i0MQLzt/QfjcnmLuEItDBYw7MGB+\nJiKSHeQNqikloypAxgOrxQGA816N3kdzsDV2AQxfH3aF5owGtCntw0FLRpLoBGOq\n+4SiLg3+M9e6jPzk9EvB5Xbg4GXumpu+Qz2l4bx73tdc7ahLLucCAwEAAaNCMEAw\nDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUCAjFfPCPzbE4PsYEI5ezd2cOKqUw\nDgYDVR0PAQH/BAQDAgKEMA0GCSqGSIb3DQEBCwUAA4IBAQCBDQqz+nJiBDwEUasS\nJwNCwCpV8SoJq281z7lOhTSWLnf+y5ZQNB02eLEODrKm7hqXdHTs5lTdFlYfwtum\nlnqsYtberPW0Ffv2IdPwmjZHNUqAaNpOuq/BH7BixX1DdgKERcp1kBmpmcQAlp8X\n/ymvCRMDmamb7LTgAH2zFEvXaxasmy0wPeTf+2DX9DmGtU0SJ3rZ4RT35r+zszN1\nWeGdglWKnCpbAtlpw7aqrwd3O6FBCtIKuNZiZAco/07j0sPYsiauvLtesW3vNMkp\nbIVNsGP0/qPOPLMXe0EPb6M1eSOd9z49fsSa9VNomq5OrpySZ+xDjtzxHBn6DFrH\nuaM1';//localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});*/

const apolloClient = new ApolloClient({
    link: httpLink,//link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
        $loadingKey: 'loading'
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    apolloProvider,
    render: h => h(App)
})