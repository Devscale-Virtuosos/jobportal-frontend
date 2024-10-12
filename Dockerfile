FROM node:lts

WORKDIR /app

COPY package*.json pnpm-lock.yaml ./

RUN npm install -g pnpm@latest
RUN npm install -g typescript

RUN pnpm install

COPY . .

# Accept build arguments
ARG REACT_APP_BASE_URL

# Write build arguments to .env file
RUN echo "REACT_APP_BASE_URL=$REACT_APP_BASE_URL" > .env

RUN pnpm build

EXPOSE 4173

CMD ["pnpm", "preview"]
