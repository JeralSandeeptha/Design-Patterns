class HttpRequest {
  private constructor(
    public method: string,
    public url: string,
    public headers: Record<string, string>,
    public body?: any
  ) {}

  static get Builder() {
    return new HttpRequestBuilder();
  }
}

class HttpRequestBuilder {
  private method: string = "GET";
  private url!: string;
  private headers: Record<string, string> = {};
  private body?: any;

  setMethod(method: string): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  setHeaders(headers: Record<string, string>): this {
    this.headers = headers;
    return this;
  }

  setBody(body: any): this {
    this.body = body;
    return this;
  }

  build(): HttpRequest {
    return new HttpRequest(this.method, this.url, this.headers, this.body);
  }
}

const request = HttpRequest.Builder
  .setMethod("POST")
  .setUrl("https://api.example.com")
  .setHeaders({ "Content-Type": "application/json" })
  .setBody({ username: "John", password: "secretpassword" })
  .build();

console.log(request);