import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {

  const {method, url} = req
  
  if (method === 'GET' && url === '/users') {
    return res
    .setHeader('content-type', 'application/json')
    .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {

    users.push({
      name: 'John Doe',
      email: 'johndoe@example.com',
      age: 19
    })

    return res.end('Criando novo usuário')
  }
  
  return res.end('Hello World')
})


server.listen(3333)