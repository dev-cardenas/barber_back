## Run postgres in docker

```
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

### Prisma

```
npx prisma migration dev
npx prisma studio
```

### Set up a new Prisma project

```
  npx prisma init
```

### Generate artifacts (e.g. Prisma Client)

```
  npx prisma generate
```

### Browse your data

```
 npx prisma studio
```

### Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)

```
  npx prisma migrate dev
  npx prisma migrate reset
```

### Run seed

```
  npx prisma db seed
```

### Pull the schema from an existing database, updating the Prisma schema

```
  npx prisma db pull
```

### Push the Prisma schema state to the database

```
  npx prisma db push
```

### Validate your Prisma schema

```
  npx prisma validate
```

### Format your Prisma schema

```
  npx prisma format
```

[Package to Invoice PY](https://github.com/TIPS-SA/facturacionelectronicapy-xmlgen/tree/main)
