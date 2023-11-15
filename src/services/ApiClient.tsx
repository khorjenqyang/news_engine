import Axios from 'axios'

export default Axios.create({
    baseURL:"https://newsapi.org/v2/everything?"
})

export const params = {
    apiKey: '794b798a4d264a078841ab532cb7bc59',
    sortBy:"publishedAt",
    language:"en"
}
