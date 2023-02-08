import axios from 'axios'
import { RepositoryResponse } from './types'

const api = axios.create({
  baseURL: 'https://api.github.com'
})

function getRepositories () {
  return api.get<RepositoryResponse[]>('/users/censuradho/repos', {
    params: {
      sort: 'created',
      order: 'desc'
    }
  })
}

export const github = {
  getRepositories
}