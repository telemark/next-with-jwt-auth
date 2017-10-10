import axios from 'axios'
import { AUTH_URL } from '../config'

module.exports = async (url, jwt) => {
  axios.defaults.headers.common['Authorization'] = jwt || false
  try {
    const res = await axios.get(url)
    return res.data
  } catch (err) {
    if (err.response && err.response.status === 401) {
      // eslint-disable-next-line no-undef
      localStorage.clear()
      window.location = AUTH_URL
    }
    return err.message
  }
}
