<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Environnement

node 16.14.0
npm 8.3.1

## Installation

```bash
$ npm i -g @nestjs/cli
$ nest new nestjs_best_pratice
```

## Eslint/Prettier/husky/commitlint

```bash
$ npm install --save-dev pretty-quick husky @commitlint/config-conventional @commitlint/cli @commitlint/cz-commitlint commitizen
$ npx husky-init && npm install
```

### update `package.json`

```json
  "scripts": {
    "prebuild": "rimraf dist",
    "build": "nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "format:check": "prettier --check \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "lint:hook": "eslint \"{src,apps,libs,test}/**/*.ts\" --quiet --fix",
    "lint:ci": "eslint \"{src,apps,libs,test}/**/*.ts\" --quiet --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json",
    "prepare": "husky install"
  },
```

### add `.husky/commit-msg`

```shell
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no -- commitlint --edit $1
```

### add `.husky/pre-commit`

```shell
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint:hook
npm run test:cov
npx pretty-quick --staged
```

### add `.husky/pre-push`

```shell
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

nest build
```

### add `commitlint.config.ts`

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'subject-case': [2, 'always', 'sentence-case'],
  },
  prompt: {
    messages: {
      skip: ':skip',
      max: 'pas plus de %d caractères',
      min: 'au moins %d caractères',
      emptyWarning: 'ne peut être vide',
      upperLimitWarning: 'au-dessus de la limite',
      lowerLimitWarning: 'sous la limite',
    },
    questions: {
      type: {
        description: 'Choisissez le type de modification que concerne votre commit :',
        enum: {
          feat: {
            description: 'Ajout/mise à jour de fonctionnalité',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: 'Correction de bug',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          docs: {
            description: 'Ajout/modif. de documentation',
            title: 'Documentation',
            emoji: '📚',
          },
          style: {
            description: 'Modifs de style et de mise en forme du code (espacements, virgules, etc.)',
            title: 'Styles',
            emoji: '💎',
          },
          refactor: {
            description: 'Modif. des sources n’étant ni un correctif, ni un ajout de fonctionnalité',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          perf: {
            description: 'Amélioration de la performance',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          test: {
            description: 'Ajout ou correction de tests',
            title: 'Tests',
            emoji: '🚨',
          },
          build: {
            description: 'Modif. affectant le "build" ou les dépendances externes (exemples de contextes :  webpack, broccoli, npm)',
            title: 'Builds',
            emoji: '🛠',
          },
          ci: {
            description: 'Modif. de la configuration ou des scripts liés à la CI (Travis, Circle, BrowserStack, SauceLabs, etc.)',
            title: 'Continuous Integrations',
            emoji: '⚙️',
          },
          chore: {
            description: 'Autres mises à jour ne modifiant ni les sources, ni les tests',
            title: 'Chores',
            emoji: '♻️',
          },
          revert: {
            description: 'Annuler (revert) un commit précédent',
            title: 'Revert',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description: 'Quel est le contexte des modifications (composant, nom de fichier)',
      },
      subject: {
        description: 'Écrivez une description concise, à l’impératif',
      },
      body: {
        description: 'Renseignez une description plus détaillée des modifications',
      },
      isBreaking: {
        description: 'Y a-il des changements majeurs ("breaking changes") ?',
      },
      breakingBody: {
        description:
          'Un commit cassant la compatibilité ascendante ("breaking changes") nécessite un corps de message. Veuillez renseigner une description plus longue et détaillée que la première ligne du commit.',
      },
      breaking: {
        description: 'Décrivez les "breaking changes"',
      },
      isIssueAffected: {
        description: 'Cela concerne-t-il un ticket existant ?',
      },
      issuesBody: {
        description:
          'Vous devez ajouter un corps au message si ce commit ferme des tickets. Essayez de renseigner une description plus longue et détaillée que la première ligne du commit.',
      },
      issues: {
        description: 'Ajoutez une référence de ticket ("fix #123", "ref #123")',
      },
    },
  },
};
```

### update `.prettierrc`

```json
{
  "tabWidth": 2,
  "useTabs": false,
  "bracketSameLine": true,
  "bracketSpacing": true,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "arrowParens": "avoid",
  "trailingComma": "es5",
  "printWidth": 160,
  "semi": true,
  "overrides": [
    {
      "files": ["*.json", ".babelrc"],
      "options": {
        "parser": "json-stringify"
      }
    },
    {
      "files": ["*.jsonc", "tsconfig*.json"],
      "options": {
        "parser": "json"
      }
    },
    {
      "files": ["*.js", "*.cjs", "*.mjs"],
      "options": {
        "parser": "babel"
      }
    },
    {
      "files": ["*.ts"],
      "options": {
        "parser": "typescript"
      }
    }
  ]
}
```

## Mise en place déploiement continue

### Référence

https://dev.to/sandeepbalachandran/how-to-build-and-deploy-angular-application-to-surge-using-github-actions-38h9
https://localcoder.org/only-run-job-on-specific-branch-with-github-actions

### Installation

```bash
npm install surge --save-dev
```

### Configuration

```bash
`node_modules/.bin/surge login`
`./node_modules/.bin/surge -p dist/ --domain nestjs-best-pratice-stage.surge.sh`
```

Créer un token, si ça n'a pas été fait :

`./node_modules/.bin/surge token`

Définir `SURGE_DOMAIN` dans github avec `angular-best-pratice-stage.surge.sh`:
Définir `SURGE_TOKEN` dans github avec le token créé précédement :

`settings` -> `Secrets` -> `New repository secret`

### Création du fichier `.github.workflows.ci.yml`

```yaml
name: CI
on: push
jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout ✅
        uses: actions/checkout@v2
      - name: Setup 🏗
        uses: actions/setup-node@v2
        with:
          node-version: 16.14.0
          cache: 'npm'
      - name: Install ⚙️
        run: npm ci
      - name: ESLint
        run: npm run lint:ci
      - name: Prettier
        run: npm run format:check
      - name: Test Unitaire 📋
        run: npm run test:cov
      - name: Build 🛠
        run: npm run build
      - name: Archive build 🛠
        if: success()
        uses: actions/upload-artifact@v1
        with:
          name: deploy_dist
          path: dist
  deploy:
    runs-on: ubuntu-latest
    needs: ci
    name: Deploying to surge
    if: github.ref == 'refs/heads/master'
    steps:
      - uses: actions/checkout@v2
      - name: Download build
        uses: actions/download-artifact@v1
        with:
          name: deploy_dist
      - name: Install surge and fire deployment
        uses: actions/setup-node@v1
        with:
          node-version: 16.14.0
      - run: npm install -g surge
      - run: surge ./deploy_dist ${{ secrets.SURGE_DOMAIN }} --token ${{ secrets.SURGE_TOKEN }}
```

## Mise en place de fastify et swagger

### Installation

```bash
$ npm i --save @nestjs/platform-fastify
$ npm install --save @nestjs/swagger fastify-swagger
```

### Configuration

Update `main.ts`

```typescript
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  const config = new DocumentBuilder()
    .setTitle('Nest Best Practice API')
    .setDescription('The Nest Best Practice API description')
    .setVersion('1.0')
    .addTag('Nest Best Practice')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
```

## Mise en place de Postgresql && TypeORM & Docker

### ressources

https://dev.to/erezhod/setting-up-a-nestjs-project-with-docker-for-back-end-development-30lg
https://docs.nestjs.com/techniques/database
https://wanago.io/2020/05/18/api-nestjs-postgresql-typeorm/
https://medium.com/@gausmann.simon/nestjs-typeorm-and-postgresql-full-example-development-and-project-setup-working-with-database-c1a2b1b11b8f
https://tushar-chy.medium.com/a-simple-todo-application-with-nestjs-typeorm-postgresql-swagger-pgadmin4-jwt-and-docker-caa2742a4295

### Installation

```bash
$ npm install @nestjs/typeorm typeorm pg
```

### Configuration

Création du fichier `ormconfig.json`

```json
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "admin",
  "password": "admin",
  "database": "abpdb",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "synchronize": true
}
```

Mettre à jour le fichier `app.module.ts`

```typescript
imports: [TypeOrmModule.forRoot()],
```

Création du fichier `Dockerfile`

```dockerfile
FROM node:16.14.0-alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:16.14.0-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
```

Création du fichier `docker-compose.yml`

```yaml
version: '3'
services:
  postgres:
    container_name: postgres-db
    image: postgres:latest
    ports:
      - '5432:5432'
    volumes:
      - /data/postgres:/data/postgres
    env_file:
      - docker.env
    networks:
      - postgres
  nestjs:
    build:
      context: .
      dockerfile: ./Dockerfile
    image: tusharchy/nest-and-postgres-application:latest
    environment:
      - DB_TYPE=${DB_TYPE}
      - POSTGRES_HOST=${POSTGRES_HOST}
      - POSTGRES_USER=${DATABASE_USER}
      - POSTGRES_PASS=${DATABASE_PASSWORD}
      - POSTGRES_DB=${DB_NAME}
      - POSTGRES_SYNC=false
      - JWT_SECRET=${JWT_SECRET}
      - POSTGRES_PORT=${POSTGRES_PORT}
      - APP_EXPIRES=${APP_EXPIRES}
      - APP_PORT=${APP_PORT}
    ports:
      - '3000:3000' # expose-to-the-world : only-in-the-docker
    container_name: nest-todo-app-be
    depends_on:
      - postgres
    volumes:
      - .:/app
      - /app/node_modules
  pgadmin:
    image: dpage/pgadmin4
    restart: always
    container_name: nest-pgadmin4
    environment:
      - PGADMIN_DEFAULT_EMAIL=${PGADMIN_DEFAULT_EMAIL}
      - PGADMIN_DEFAULT_PASSWORD=${PGADMIN_DEFAULT_PASSWORD}
      - PGADMIN_LISTEN_PORT=${PGADMIN_LISTEN_PORT}
    ports:
      - '8080:80'
    volumes:
      - ./pgadmin-data:/var/lib/pgadmin
    depends_on:
      - postgres
volumes:
  pgdata:
  pgadmin-data:

networks:
  postgres:
    driver: bridge
```

création du fichier `docker.env`

```
POSTGRES_USER=admin
POSTGRES_PASSWORD=admin
POSTGRES_DB=abpdb
PGADMIN_DEFAULT_EMAIL=admin@admin.com
PGADMIN_DEFAULT_PASSWORD=admin
```

lancer la commande

```bash
$ docker-compose up
```

## Command

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Format

```bash
$ npm run format

$ npm run lint
```

https://tushar-chy.medium.com/a-simple-todo-application-with-nestjs-typeorm-postgresql-swagger-pgadmin4-jwt-and-docker-caa2742a4295
