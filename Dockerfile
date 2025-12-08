# Development and Production Dockerfile for a Next.js application

# Base image that only copies files over
FROM public.ecr.aws/docker/library/node:20.9 as base

RUN mkdir -p /app
WORKDIR /app

#Copy package.json and run install
COPY package*.json ./

#Clean install the dependencies
RUN npm ci

#Copy files from host to the current directory
COPY . .

# Production stage: builds and runs the optimized app for production deployment (not used for local development)
FROM public.ecr.aws/docker/library/node:20.9 as production
RUN mkdir -p /app
WORKDIR /app

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED=1

#Copy files from base
COPY --from=base /app /app

# Run the build once everything has been copied over
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
