import axios from "axios";

const baseUrl = 'https://warren-transactions-api.herokuapp.com/api/transactions';

const apiTransactions = axios.create({
    baseURL: baseUrl
})

export default apiTransactions;