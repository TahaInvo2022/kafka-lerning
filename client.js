const { Kafka } = require("kafkajs");

// Create the client with the broker list
exports.kafka = new Kafka({
  clientId: "my-app",
  brokers: ["192.168.100.29:9092"],
});
