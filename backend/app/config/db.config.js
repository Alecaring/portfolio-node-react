module.exports = {
    HOST: "127.0.0.1",
    USER: "root",
    PASSWORD: "root",
    DB: "testdb_123",
    dialect: "mysql",
    port: 8889,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};