const { kafka } = require("./client");

const init = async () => {

    try {
        const consumer = await kafka.consumer({ groupId: "group-1" });

        console.log('Connecting consumer.....');
        await consumer.connect();
        console.log("Consumer connected to Kafka----", consumer);

        await consumer.subscribe({
            topics: ["rider-updates"],
            fromBeginning: true, // read all messages from the beginning of the topic
        });

        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                console.log("Received message from topic: ", topic);
                console.log("Received partition: ", partition);
                console.log("Message received from Kafka----", message.value.toString());
            }
        });

    } catch (error) {
        console.log('Error in consumer', error);
    }

};

init(); 
