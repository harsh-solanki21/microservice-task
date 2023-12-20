import dotenv from 'dotenv'
import CreateChannel from '../config/rabbitmq'

dotenv.config()

const SubscribeMessage = async () => {
    const channel = await CreateChannel()

    const exchangeName: string = process.env.EXCHANGE_NAME as string
    const QueueName: string = process.env.USER_QUEUE as string
    const bindingKey: string = (process.env.USER_BINDING_KEY as string) || ''

    await channel.assertExchange(exchangeName, 'direct', { durable: true })
    const q = await channel.assertQueue(QueueName, { exclusive: true })
    // console.log(`Waiting for messages in queue: ${q.queue}`)

    channel.bindQueue(q.queue, exchangeName, bindingKey)

    channel.consume(
        q.queue,
        async (message: any) => {
            if (message.content) {
                const msg = JSON.parse(message.content.toString())
                console.log('Received: ', msg)
            }
            console.log('[X] received')
        },
        {
            noAck: true,
        }
    )
}

export default SubscribeMessage
