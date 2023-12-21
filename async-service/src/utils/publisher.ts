import dotenv from 'dotenv'
import CreateChannel from '../config/rabbitmq'

dotenv.config()

const PublishMessage = async (
    message: any,
    correlationId: string,
    replyTo: string
) => {
    const channel = await CreateChannel()

    // const exchangeName: string = process.env.EXCHANGE_NAME as string
    // const bindingKey: string = process.env.ORDER_BINDING_KEY as string
    const queueName: string = process.env.RPC_QUEUE_TWO as string
    // const replyTo: string = process.env.REPLY_QUEUE_TWO as string
    // const correlationId: string = RandomGenerator()
    const msg = Buffer.from(JSON.stringify(message))

    await channel.assertQueue(queueName, { durable: false })

    channel.sendToQueue(queueName, msg, {
        replyTo,
        correlationId,
        contentType: 'application/json',
    })

    console.log(
        `"${message}" sent to "${queueName}" queue with "${replyTo}" reply queue`
    )
}

export default PublishMessage
