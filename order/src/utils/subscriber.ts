import dotenv from 'dotenv'
import CreateChannel from '../config/rabbitmq'
import PublishMessage from './publisher'

dotenv.config()

const SubscribeMessage = async () => {
    const channel = await CreateChannel()

    // const exchangeName: string = process.env.EXCHANGE_NAME as string
    // const bindingKey: string = process.env.ORDER_BINDING_KEY as string
    const queueName: string = process.env.RPC_QUEUE_ONE as string

    const q = await channel.assertQueue(queueName, { durable: true })
    console.log(`Waiting for messages in queue: ${q.queue}`)

    await channel.consume(
        q.queue,
        async (message: any) => {
            const { correlationId, replyTo } = message.properties
            if (!correlationId || !replyTo) {
                console.log('Missing properties...')
            }

            console.log('content: ', message.content.toString())
            await PublishMessage(JSON.parse(message.content.toString()))
        },
        {
            noAck: true,
        }
    )
}

export default SubscribeMessage
