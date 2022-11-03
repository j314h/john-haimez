export class EventSse {
  private url = process.env.REACT_APP_URL_API_2
  public sse: EventSource

  constructor(path: string) {
    this.sse = new EventSource(`${this.url}${path}`)
  }
}
