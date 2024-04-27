# dumping

<p align="center">
  <img src="./dumptruck.png">
</p>

A temporary server that only dumps and prints requests.

## Usage

npm:

```bash
npx dumping
```

pnpm:

```bash
pnpx dumping
```

## Options

```bash
dumping --help

Usage: dumping [options]

Options:
  -p, --port <port>  port to listen on (default: "3000")
  -h, --help         display help for command
```

## Features

- Parse body if content type is:
  - `text/plain`
  - `application/x-www-form-urlencoded`
  - `application/json`
  - `text/csv`

## Examples

### Text

Input:

```bash
curl -X POST -d 'Hello world!' -H "Content-Type:text/plain" http://localhost:3000
```

Output:

```bash
request ==========
http://::ffff:127.0.0.1:3000
http -------------
POST /
headers -----------
{
  host: 'localhost:3000',
  'user-agent': 'curl/7.81.0',
  accept: '*/*',
  'content-type': 'text/plain',
  'content-length': '12'
}
body -----------
Hello world!
```

### URL encoded form data

Input:

```bash
curl -X POST -d 'foo=101&bar=102&baz=103' http://localhost:3000
```

Output:

```bash
request ==========
http://::ffff:127.0.0.1:3000
http -------------
POST /
headers -----------
{
  host: 'localhost:3000',
  'user-agent': 'curl/7.81.0',
  accept: '*/*',
  'content-length': '23',
  'content-type': 'application/x-www-form-urlencoded'
}
body -----------
{ foo: '101', bar: '102', baz: '103' }
```

### JSON

Input:

```bash
curl -X POST -H 'Content-Type: application/json'  -d '{"foo":101,"bar":102,"baz":103}' http://localhost:3000
```

Output:

```bash
request ==========
http://::ffff:127.0.0.1:3000
http -------------
POST /
headers -----------
{
  host: 'localhost:3000',
  'user-agent': 'curl/7.81.0',
  accept: '*/*',
  'content-type': 'application/json',
  'content-length': '112'
}
body -----------
{
  foo: 101,
  bar: 102,
  baz: 103,
}
```

### CSV

Input:

```bash
curl -X POST -H 'Content-Type: text/csv'  -d $'foo,bar,baz\n0,1,2\n3,4,5\n' http://localhost:3000
```

Output:

```bash
request ==========
http://::ffff:127.0.0.1:3000
http -------------
POST /
headers -----------
{
  host: 'localhost:3000',
  'user-agent': 'curl/7.81.0',
  accept: '*/*',
  'content-type': 'text/csv',
  'content-length': '24'
}
body -----------
[ [ 'foo', 'bar', 'baz' ], [ '0', '1', '2' ], [ '3', '4', '5' ] ]
```
