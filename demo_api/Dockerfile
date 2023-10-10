FROM node:18-alpine
WORKDIR /app

# Everything else we need will be generated or is provided by the docker context
COPY ./package.json ./package.json
COPY ./tsconfig.json ./tsconfig.json
COPY ./index.ts ./index.ts
RUN npm install
RUN npm install typescript
# RUN npx tsc # This line is part of the start command

CMD ["npm", "run", "start"]
