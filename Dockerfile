FROM node:8.11.3-alpine AS build

COPY . /
RUN yarn && yarn webpack

FROM scratch
COPY --from=build dist /content
