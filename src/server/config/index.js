module.exports = {
    "development": {
        "username": "root",
        "password": null,
        "database": "graphbook_dev",
        "host": "localhost",
        "dialect": "mysql",
        "operatorsAliases": false,
        "pool": {
            "max": 5,
            "min": 0,
            "acquire": 30000,
            "idle": 10000
        }
    },
    "production": {
        "host": process.env.host,
        "username": process.env.username,
        "password": process.env.password,
        "database": process.env.database,
        "logging": false,
        "dialtec": "mysql",
        "operatorsAliases": false,
        "pool": {
            "max": 5,
            "min": 0,
            "acquire": 30000,
            "idle": 10000
        }
    }
}