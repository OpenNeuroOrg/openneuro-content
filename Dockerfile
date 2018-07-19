FROM node:8.11.3-alpine AS build

COPY . /
RUN yarn && yarn webpack

FROM alpine:3.8
COPY --from=build lib /content

CMD /bin/true