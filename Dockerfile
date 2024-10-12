FROM node:lts

WORKDIR /app

COPY package*.json pnpm-lock.yaml ./

RUN npm install -g pnpm@latest
RUN npm install -g typescript

RUN pnpm install

COPY . .

# Accept build arguments
ARG VITE_API_BASE_URL
# Set environment variables during the build process
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

RUN pnpm build

EXPOSE 4173

CMD ["pnpm", "preview"]
