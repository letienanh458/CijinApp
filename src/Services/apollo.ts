import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { setContext } from '@apollo/client/link/context'
import { getMainDefinition } from '@apollo/client/utilities'
import { Config } from '@/Config'

interface ClientProps {
  token?: string
  deviceId?: string
}

const createApolloClient = (token: string) => {
  const httpLink = createHttpLink({
    uri: Config.GRAPHQL_URL,
  })

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })
  const wsLink = new WebSocketLink({
    uri: Config.GRAPHQL_WS,
    options: {
      reconnect: true,
      connectionParams: {
        authorization: token ? `Bearer ${token}` : '',
        deviceId: '80e75904-c5a6-4373-8080-03dab92b27b1',
      },
    },
  })

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      )
    },
    authLink.concat(wsLink),
    authLink.concat(httpLink),
  )

  return new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  })
}

export default createApolloClient
