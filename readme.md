## Run postgres in docker
```
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

```
 yarn typeorm migration:run -c development -t each
```

## Migrations

Run command

```
yarn typeorm migration:generate -n UsersAndTables
yarn typeorm migration:run
yarn typeorm migration:run -c development -t each // para correr uno a uno
```

### dev

```
yarn typeorm migration:generate ./src/database/migrations/create-db -d ./src/config/data-source.ts
yarn typeorm migration:run -d ./src/config/data-source.ts
yarn typeorm migration:revert -d ./src/config/data-source.ts
```
