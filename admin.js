const {kafka} = require('./client');


const initialize = async () => {
    try {
        //admin kafka server
        const admin = kafka.admin();
        await admin.connect();
        console.log('Connected to Kafka----', admin);

        //Create a new topic
        const topicName = "rider-updates";
        await admin.createTopics({
            topics: [
                {
                    topic: topicName,
                    numPartitions: 2,
                }
            ]
        });
        console.log('Topic created successfully');  

        // console the list of topics   
        const topics = await admin.listTopics();
        console.log('Topics: ', topics);  

        admin.disconnect();
        console.log('Kafka disconnected');  
    } catch (error) {
        console.error('Error initializing Kafka', error);
    }
}

initialize();