import 'whatwg-fetch';

import { jsonTypePokemons, User } from './types';

interface ServiceState {
  users: Array<User>,
  user: User
}

const jsonParsingError = {
  error: 'Parsing Error',
  message: 'Impossible to parse server`s response'
}

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

interface RequestOptions {
  body?: {}
  headers?: HeadersInit
}

interface getResponse<T> {
  body: T;
}

class BasicHttpService {
  get = <T>(url: string, options?: object) => fetchJson<T>(url,  'GET', options)
  post = <T>(url: string, options?: object, body?: object) => fetchJson<T>(url, 'POST', { ...options, body })
  put = <T>(url: string, options?: object, body?: object) => fetchJson<T>(url, 'PUT', { ...options, body })
  delete = <T>(url: string, options?: object) => fetchJson<T>(url, 'DELETE', options)
}

export default class PokemonHttpService extends BasicHttpService {
  serviceUrl = 'https://pokeapi.co/api/v2/'

  public loginUser = (userName: string) => this.post<ServiceState>(`${this.serviceUrl}/login`, {}, { name: userName })

  public getPokemons = () => this.get<jsonTypePokemons>(`${this.serviceUrl}pokemon/`, {})
//   public getPokemon = (id: number) => this.get<jsonTypePokemon>(`${this.serviceUrl}pokemon/${id}`, {})

}

async function fetchJson<T>(url: string, method: Method, options?: RequestOptions) {

  const jsonBody = (options && options.body) ? JSON.stringify(options.body) : undefined

  // tslint:disable:no-any
  const newOptions: any = {
    method,
    body: jsonBody,
    headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'pragma': 'no-cache',
      'cache-control': 'no-cache'
       },
  }

  // tslint:disable:no-any
  const response = await fetch(encodeURI(url), newOptions)
  const value = await filterStatus(response)
  return value as T
}

async function filterStatus(response: Response) {  
  if (response.status >= 200 && response.status < 300) {
    return response.json()
  } else {
    try {
      const j = await response.json();
      return await Promise.reject(j);
    }
    catch (err) {
      return await Promise.reject(err instanceof Error ? jsonParsingError : err);
    }
  }
}