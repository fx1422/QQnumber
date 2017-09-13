import {commonParams, options} from './config'
import axios from 'axios'

export function getData() {
  const url = '/api/getData'
  const data = Object.assign({}, commonParams, {
  callback:`jQuery191045719272808156397_1505290813280&_=1505290813281`
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
