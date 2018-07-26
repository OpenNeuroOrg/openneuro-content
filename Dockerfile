FROM node:8.11.3-alpine AS build

COPY . /content
WORKDIR /content
RUN yarn && yarn webpack

FROM alpine:3.8
COPY --from=build /content/lib /content

CMD /bin/true