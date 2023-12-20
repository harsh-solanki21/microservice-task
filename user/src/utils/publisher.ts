import dotenv from 'dotenv'
import CreateChannel from '../config/rabbitmq'

dotenv.config()

const PublishMessage = async (routingKey: string, message: any) => {
    const channel = await CreateChannel()

    const exchangeName: string = process.env.EXCHANGE_NAME as string

    await channel.assertExchange(exchangeName, 'direct', { durable: false })

    channel.publish(
        exchangeName,
        routingKey,
        Buffer.from(JSON.stringify(message))
    )

    console.log(
        `${message} sent to ${routingKey} routing key via ${exchangeName} exchange`
    )
}

export default PublishMessage
