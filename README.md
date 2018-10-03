# log4js-udp
Emit log4js event by udp.The same time,a JieServer/Logx service is running at the remote addres.
# usage
npm install --save log4js-udp
```
log4js.configure({
    "appenders": {
      "upd": {
        "type": "log4js-udp",
        "host": "127.0.0.1",//remote addres
        "port": 18777
      }
    },
    "categories": {
      "default": {
        "appenders": [
          "upd"
        ],
        "level": "all"
      }
    }
  })
  ```