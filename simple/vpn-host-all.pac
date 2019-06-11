function FindProxyForURL(url, host) {
    return "SOCKS5 192.168.42.1:65500; PROXY 192.168.42.1:65510; DIRECT";
}
