# Kafka Learning Repository

Welcome to the **Kafka Learning Repository**! This repository serves as a foundational resource to understand, implement, and experiment with Apache Kafka concepts and functionality. Whether you're a beginner or an intermediate user, this repository will help you learn how to work with Kafka effectively.

---

## Overview

Apache Kafka is a distributed event-streaming platform used for building real-time data pipelines and applications. This repository explores the following:

- Kafka producers and consumers
- Topic creation and management
- Working with partitions
- Implementing consumer groups

The purpose of this repository is to provide hands-on examples, scripts, and exercises to solidify your Kafka knowledge.

---

## Getting Started

To begin using this repository, clone it to your local machine and follow the instructions in the setup section.

```bash
# Clone the repository
git clone https://github.com/TahaInvo2022/kafka-lerning.git

# Navigate into the directory
cd kafka-lerning
```

---

## Repository Structure

The repository is organized as follows:

```
kafka-lerning/
|├── admin.js/           # Code demonstrating Kafka topics by admin
|├── client.js/            # Code demonstrating Kafka configuration
|├── producer.js/            # Code demonstrating Kafka producer config and event generation
|├── consumer.js/               # Code demonstrating Kafka consumer config and event consuming
|├── README.md          # This README file
```

---

## Installation and Setup

1. **Start Zookeeper and Kafka**
   ```bash
   # Start Zookeeper expose PORT 2181
   docker run -p 2181:2181 zookeeper 

   # Start Kafka Container, expose PORT 9092 and setup ENV variables.
   docker run -p 9092:9092 \
    -e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
    -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
    -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
    confluentinc/cp-kafka
   ```

---

## Key Kafka Concepts

1. **Topics**: Organize and store messages/events.
2. **Producers**: Publish events to Kafka topics.
3. **Consumers**: Subscribe to topics and process events.
4. **Partitions**: Enable scalability by distributing events across multiple brokers.
6. **Consumer Groups**: Coordinate distributed consumption of topics.

---

