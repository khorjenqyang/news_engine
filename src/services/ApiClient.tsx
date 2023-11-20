import Axios from 'axios'

export default Axios.create({
    baseURL:"https://gnews.io/api/v4/search"
})

export const baseParams = {
    apikey: 'ccdd3d96106f6cd0dcbbf4922fa8c025',
    sortby:"publishedAt",
}
