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


## Documentation Test Users
Each of us has an admin user and a standard user, The Usuers are:

Users admins:
email: ManuelFrancisco@admin.com     password: ManuelFrancisco1  firstName:Manuel  lastName :Francisco

email: AgustinAvila@admin.com    password: AgustinAvila1  firstName: Agustin  lastName :Avila
email: MatiasPreiti@admin.com   password:MatiasPreiti1  firstName:Matias  lastName :Preiti
email: IvanAchocalla@admin.com   password: IvanAchocalla1 firstName:Ivan  lastName :Achocalla
email: AlexisZacre@admin.com    password: AlexisZacre1 firstName: Alexis lastName :Zacre
email:JuanAlmazan@admin.com    password:JuanAlmazan1  firstName:Juan  lastName :Almazan
email: FranciscoOlivero@admin.com   password: FranciscoOlivero1 firstName: Francisco  lastName :Olivero

email: FedericoPalmeri@admin.com   password: FedericoPalmeri1 firstName: Federico lastName :Palmeri 
email: Usuario1@admin.com   password: 12345678   firstName: Usuario1   lastName: Demo1 




Users standards :
email: ManuelFrancisco@standard.com     password: ManuelFrancisco1  firstName:Manuel  lastName :Francisco
email: AgustinAvila@standard.com    password: AgustinAvila1  firstName: Agustin  lastName :Avila
email: MatiasPreiti@standard.com   password:MatiasPreiti1  firstName:Matias  lastName :Preiti
email: IvanAchocalla@standard.com   password: IvanAchocalla1 firstName:Ivan  lastName :Achocalla

email: AlexisZacre@standard.com    password: AlexisZacre1 firstName: Alexis  lastName :Zacre
email:JuanAlmazan@standard.com    password:JuanAlmazan1  firstName:Juan   lastName :Almazan
email: FranciscoOlivero@standard.com   password: FranciscoOlivero1 firstName: Francisco  lastName :Olivero
email: FedericoPalmeri@standard.com   password: FedericoPalmeri1 firstName: Federico   lastName :Palmeri 
email: Usuario1@standard.com   password: 12345678   firstName: Usuario1   lastName: Demo1 
email: Usuario2@standard.com   password: 12345678   firstName: Usuario2   lastName: Demo2 

email: AlexisZacre@standard.com    password: AlexisZacre1 firstName: Alexis lastName :Zacre
email:JuanAlmazan@standard.com    password:JuanAlmazan1  firstName:Juan  lastName :Almazan
email: FranciscoOlivero@standard.com   password: FranciscoOlivero1 firstName: Francisco  lastName :Olivero
email: Usuario1@standard.com   password: 12345678   firstName: Usuario1   lastName: Demo1 



