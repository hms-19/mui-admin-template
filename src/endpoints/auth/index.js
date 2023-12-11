import instance from "../index"

// login

export const userLogin = async (data) => {
    const res = await instance.post('/auth',data)

    return res
}
