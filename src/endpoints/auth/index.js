import instance from "../index"

// login

export const userLogin = async (data) => {
    const res = await instance.post('/auth',data)

    return res
}

// register

export const userRegister = async (data) => {
    const res = await instance.post('/users',data)

    return res
}