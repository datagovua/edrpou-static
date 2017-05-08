# edrpou-static

[![Codefresh build status]( https://g.codefresh.io/api/badges/build?repoOwner=datagovua&repoName=edrpou-static&branch=master&pipelineName=edrpou-static&accountName=Vanuan&type=cf-1)]( https://g.codefresh.io/repositories/datagovua/edrpou-static/builds?filter=trigger:build;branch:master;service:59106b25951c4e0005887ba3~edrpou-static)

Open Data in Ukraine
Web application

## How to run

1. Clone repository
2. Use docker-compose (install Docker 1.13)

```
cp docker-compose.development.yml docker-compose.override.yml
docker-compose up --build
```

3. Open http://localhost:8080 in the browser
