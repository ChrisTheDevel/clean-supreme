import express, { Express, Request, Response } from 'express';

const port = 6969

const server: Express = express()

server.get('/', (_req: Request,res: Response) => {
  res.send('Hello world')
})

server.listen(port, () => {
  console.log(`Example app listening at https://localhost: ${port}`)
})
