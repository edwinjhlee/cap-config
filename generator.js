const fs = require("fs")


// var proxy = "SOCKS5 192.168.0.1:9009; PROXY 192.168.0.1:9999; DIRECT";
// var direct = 'DIRECT;';


function generate(proxy, outpath){
    const s = fs.readFileSync(__dirname + "/template.txt").toString()
    const s1 = s.replace("%PROXY%", proxy)
    const s2 = s1.replace("%DIRECT%", "DIRECT;")
    fs.writeFileSync(__dirname + "/docs/" + outpath + ".pac", s2)
    console.log(`https://edwinjhlee.github.io/cap-config/${outpath}.pac`)
}

generate(
    "SOCKS5 192.168.0.1:65500; PROXY 192.168.0.1:65510; DIRECT",
    "docker-host-all"
)

generate(
    "SOCKS5 192.168.0.1:65501; PROXY 192.168.0.1:65511; DIRECT",
    "docker-host-intel"
)

generate(
    "SOCKS5 192.168.42.1:65500; PROXY 192.168.42.1:65510; DIRECT",
    "vpn-host-all"
)

generate(
    "SOCKS5 192.168.42.1:65501; PROXY 192.168.42.1:65511; DIRECT",
    "vpn-host-intel"
)

generate(
    "SOCKS5 127.0.0.1:7070; PROXY 127.0.0.1:7070; DIRECT",
    "ssh-proxy"
)

generate(
    "SOCKS5 127.0.0.1:65500; PROXY 127.0.0.1:65510; DIRECT",
    "std-proxy-all"
)

generate(
    "SOCKS5 127.0.0.1:65501; PROXY 127.0.0.1:65511; DIRECT",
    "std-proxy-intel"
)

generate(
    "SOCKS5 hq-proxy.dyinnovations.com:65500; PROXY hq-proxy.dyinnovations.com:65510; DIRECT",
    "hq-proxy-all"
)

generate(
    "SOCKS5 hq-proxy.dyinnovations.com:65501; PROXY hq-proxy.dyinnovations.com:65511; DIRECT",
    "hq-proxy-intel"
)

generate(
    [
        "SOCKS5 hq-proxy.dyinnovations.com:65500",
        "SOCKS5 127.0.0.1:7070", 
        "SOCKS5 192.168.42.1:65500",
        "DIRECT"
    ].join("; "),
    "intel"
)

generate(
    [
        "PROXY hq-proxy.dyinnovations.com:7071",
        "SOCKS5 127.0.0.1:7070",
        "DIRECT"
    ].join("; "),
    "hq-proxy"
)

generate(
    [
        "PROXY 192.168.31.246:7071",
        "DIRECT"
    ].join("; "),
    "dorm-1103"
)

generate(
    [
        "PROXY 192.168.3.31:7080",
        "SOCKS5 192.168.3.31:7070",
        "DIRECT",
    ].join(";"),
    "home-108"
)
