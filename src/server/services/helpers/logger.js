import winston from 'winston';

let transport = [
    new winston.transports.File({
        filename: 'error.log',
        level: 'error'
    }),
    new winston.transports.File({
        filename: 'combined.log',
        level: 'verbose'
    }),
];

if (process.env.NODE_ENV !== 'production') {
    transport.push(new winston.transports.Console());
}

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: transport,
});

export default logger;