var proxy = "SOCKS5 192.168.3.31:7070";

var direct = 'DIRECT;';

function FindProxyForURL(url, host) {
    return proxy;
}
