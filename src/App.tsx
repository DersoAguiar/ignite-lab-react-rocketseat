import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { client } from "./lib/apollo"
import { Router } from "./Router"


function App() { 

  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  )
}

export default App

// CMS - Content Management System

// Headless CMS (GraphCMS): Painel de ADMIN (dados fornecidos através de uma API REST ou GRaphQL)

// React consome essa API do CMS

// query / mutation graphQL

// query = buscar dados

// mutation = criar, alterar ou deletar dados

// Links Úteis:
// https://svg2jsx.com/
// https://phosphoricons.com/
// https://app.graphcms.com/
// https://date-fns.org/
// https://vimejs.com/
// https://www.graphql-code-generator.com/

// react-router-dom