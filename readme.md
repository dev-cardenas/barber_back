## Run postgres in docker
```
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

### Run migrations example
```
yarn sequelize migration:create --name=create-users
yarn sequelize db:migrate
```

## Revert migration

last
```
yarn sequelize db:migrate:undo
```
all
```
yarn sequelize db:migrate:undo:all
```

## Hay que instalar express-async-errors && youch && dotenv
