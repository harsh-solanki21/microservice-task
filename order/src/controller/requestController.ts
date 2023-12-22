const requestHandler = async (request: any) => {
    const { query, requestData } = request

    switch (query) {
        case 'GET_ALL_USERS': {
            console.log('------> Hitt')
            break
        }
        case 'GET_USER_BY_NO': {
            break
        }
        case 'CREATE_USER': {
            break
        }
        default: {
            break
        }
    }
}

export default requestHandler
