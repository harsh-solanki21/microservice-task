import dotenv from 'dotenv'
import CreateChannel from '../config/rabbitmq'
import requestHandler from '../controller/requestController'

dotenv.config()

const SubscribeMessage = async () => {
    const channel = await CreateChannel()

    // const exchangeName: string = process.env.EXCHANGE_NAME as string
    // const bindingKey: string = (process.env.USER_BINDING_KEY as string) || ''
    const queueName: string = process.env.RPC_QUEUE_TWO as string

    const q = await channel.assertQueue(queueName, { durable: false })
    console.log(`Waiting for messages in queue: ${q.queue}`)

    await channel.consume(
        q.queue,
        async (message: any) => {
            const { correlationId, replyTo } = message.properties
            if (!correlationId || !replyTo) {
                console.log('Missing properties...')
            }
            // if (message.content) {
            const msg = JSON.parse(message.content.toString())
            const response = await requestHandler(msg)
            // }
            console.log('response: ', response)

            channel.sendToQueue(
                replyTo,
                Buffer.from(JSON.stringify(response)),
                {
                    correlationId,
                }
            )
        },
        {
            noAck: true,
        }
    )
}

export default SubscribeMessage
