# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```


## Documentation Seeders Users
Each of us has an admin user and a standard user, for example:
if your name is Manuel and your lastname is Francisco, 
ManuelFrancisco@admin.com or ManuelFrancisco@standard.com
and the password is ManuelFrancisco1.

Another example: 
email: AgustinAvila@admin.com,
password: AgustinAvila1


