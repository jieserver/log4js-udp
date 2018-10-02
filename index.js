const debug = require('debug')('Logx:updAppender')
module.exports = {
    configure(config){
        const sock = dgram.createSocket('udp4');
        const host = config.host || '127.0.0.1';
        const port = config.port || 18777;
        debug('create',host,port)
        return function log(event) {
            const buff = Buffer.from(JSON.stringify(event));
            debug('send',port,host)
            sock.send(buff, 0, buff.length, port, host, (err) => err && console.error(`log4js.logUDPAppender error sending to ${host}:${port}, error: `, err)) //eslint-disable-line
        };
    }
}