# Unit Testing JavaScript with Tape

## Getting Started

### Prerequisites

docker or node v8

### Installing

Download

```
git pull https://github.com/joaocferreira/testing-tape.git
```

#### Testing with docker 

```
docker build -t test ./
docker run -d test
docker ps -a
docker logs <container-id>
```

#### Testing with node 

```
npm install
npm run test
```