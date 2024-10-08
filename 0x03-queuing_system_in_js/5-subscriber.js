//connects to the redis server on the local machine
import redis from 'redis';

const client = redis.createClient();

client.on('connect', () => {
    console.log('Redis client connected to the server');
});

client.on('error', (err) => {
    console.log(`Redis client not connected to the server: ${err.message}`);
});


//subscribe to the 'holberton school channel'
const channel = 'holberton school channel';

client.subscribe(channel);

client.on('message', (channel, message) => {
    console.log(message);

    if (message === 'KILL_SERVER') {
        client.unsubscribe();
        client.quit();
    }
});
