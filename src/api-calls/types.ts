export interface Payload {
  upstream: string
  owner: string
  signature: string
  nonce: string
}

export type WebhookRes = {
  deleteToken: string
  url: string
  id: string
} | undefined

export type WebhookError = {
  error: string
} | undefined

export type MyStore = {
  data: WebhookRes,
  error: WebhookError
}