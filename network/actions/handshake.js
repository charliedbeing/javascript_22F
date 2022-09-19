const client = new WebSocket('ws://chat.svc')
// wss -> WebSocket Secure
// https - tls/ssl - tcp/ip
// wss - tls - tcp/ip

client.onopen= ()=>{
    console.log('connection open')
}


