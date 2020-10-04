var proxy = "PROXY 192.168.3.31:7071";

var direct = 'DIRECT;';

function FindProxyForURL(url, host) {
    return proxy;
}
