FROM ruby:2.7.1-alpine

MAINTAINER Matthew Rayner <m@rayner.io>

ENV PORT 5000
ENV APP_ENV production
ENV RACK_ENV production

RUN apk add --update --no-cache build-base ruby-dev libxml2-dev libxslt-dev postgresql-dev mysql-dev openssl ca-certificates wget && \
  update-ca-certificates

RUN addgroup meetingdisplay && adduser -D -G meetingdisplay -h /home/meetingdisplay meetingdisplay

USER meetingdisplay
WORKDIR /home/meetingdisplay

COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN bundle config set without 'test'
RUN bundle install --retry 10 --jobs 4

COPY . .

EXPOSE 5000

CMD ["ruby", "server.rb"]