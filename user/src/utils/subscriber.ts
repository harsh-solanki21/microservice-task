import dotenv from 'dotenv'
import CreateChannel from '../config/rabbitmq'

dotenv.config()

const SubscribeMessage = async () => {
    const channel = await CreateChannel()

    // const exchangeName: string = process.env.EXCHANGE_NAME as string
    const queueName: string = process.env.REPLY_QUEUE_ONE as string
    // const bindingKey: string = (process.env.USER_BINDING_KEY as string) || ''

    // await channel.assertExchange(exchangeName, 'direct', { durable: true })
    const q = await channel.assertQueue(queueName, { durable: true })
    console.log(`Waiting for messages in queue: ${q.queue}`)

    // channel.bindQueue(q.queue, exchangeName, bindingKey)

    channel.consume(
        q.queue,
        async (message: any) => {
            const { correlationId, replyTo } = message.properties
            if (!correlationId || !replyTo) {
                console.log('Missing properties...')
            }
            if (message.content) {
                const msg = JSON.parse(message.content.toString())
                console.log('Received: ', msg)
            }
        },
        {
            noAck: true,
        }
    )
}

export default SubscribeMessage
