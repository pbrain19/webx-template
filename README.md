# Pauls style repo

This repo makes use of the following tech stack

- nextjs
- apollo client
- apollo server
- graphql codegen
- react hooks
- material ui

# adding endpoint

This repo uses graphql to manage the interface typings from client to server. In order to create a new route you must first create
a new schema for the type. Once the schema is declared for your new type, you can create a new query or mutation to manage it.

Once you are done declaring your new GQL typings you can now run the generator that will create the clients and typings for your new schemas using

`npm run generate`

To run the project use npm run dev

# database

We use prisma for database. To add or update ->

1. update schema
2. run migration `prisma migrate dev --name xxxxx`
3. update client `prisma generate`
