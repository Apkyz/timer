FROM python:3.10-slim

ENV TZ="Europe/Brussels"

WORKDIR /timer
COPY requirements.txt /timer/
RUN pip install -r requirements.txt
COPY . /timer/

EXPOSE 8080

CMD ["sh", "./runserver.sh"]