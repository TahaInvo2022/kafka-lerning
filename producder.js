const { console } = require('inspector');
const { kafka } = require('./client');
const readline = require('readline');

const rl = readline.createInterface({   
    input: process.stdin,
    output: process.stdout
});

const init = async () => {
    try {
        const producer = kafka.producer();
        const topicName = "rider-updates";

        await producer.connect()
        console.log('Producer Connected to Kafka----', producer);

        rl.setPrompt(' > ');
        rl.prompt();

        rl.on('line', async (line) => {
            console.log('line', line);
            const [name, location] = line.split(',');
            await producer.send({
                topic: topicName,
                messages: [
                    {
                        partition: location.toLowerCase() === 'south' ?  0 : 1,  
                        key: "location-updates",
                        value: JSON.stringify({ name, location })    
                    },
                ],
            });
            
        }).on('close', async () => {
            console.log('Producer Closed');
            await producer.disconnect();
            console.log('Producer Disconnected');
        });

        // // porduce an event to topic
        // const topicName = "rider-updates";
        // await producer.send({
        //   topic: topicName,
        //   messages: [
        //       {
        //           partition: 0,
        //           key: "location-updates",
        //           value: JSON.stringify({"name": "tony-stark", "location": "New York"})
        //       },
        //   ],
        // });

        // await producer.disconnect();
        // console.log('Producer Disconnected');

    } catch (error) {
        console.log('Couldn\'t connect to Kafka', error);
    }
};

init();