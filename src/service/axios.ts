import axios from 'axios'
import md5 from 'md5'

const timestampParans = Number(new Date())
const privateKey = 'c3e5b3db365b742c2cc1d3d5458f45369bde6705'
const publicKey = '6d76902f4dfad1f399067d2340f613e0'
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
