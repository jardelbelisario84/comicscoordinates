import axios from 'axios'
import md5 from 'md5'

const timestampParans = Number(new Date())
const privateKey = import.meta.env.VITE_PRIVATE_KEY_MARVEL_API
const publicKey = import.meta.env.VITE_PUBLIC_KEY_MARVEL_API
const hashParam = md5(timestampParans + privateKey + publicKey)

const api = axios.create({
  baseURL: 'https://gateway.marvel.com',
  params: {
    ts: timestampParans,
    apikey: publicKey,
    hash: hashParam,
  },
})

export default api
