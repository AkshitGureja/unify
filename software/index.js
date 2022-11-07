const mqtt = window.mqtt;

const clientId = "OhkTEh00FAEUIA4oNRstJis"
const host = 'ws://mqtt3.thingspeak.com/mqtt'

const options = {
  keepalive: 30,
  clientId: clientId,
  username: 'OhkTEh00FAEUIA4oNRstJis',
  password: 'CQSCMjjAjdTm2bw6s135lsIC',
  protocolId: 'MQTT',
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: 'WillMsg',
    payload: 'Connection Closed abnormally..!',
    qos: 0,
    retain: true
  },
  rejectUnauthorized: false
}

console.log('connecting mqtt client')
const client = mqtt.connect(host, options)

client.on('error', (err) => {
  console.log('Connection error: ', err)
  client.end()
})

client.on('reconnect', () => {
  console.log('Reconnecting...')
})

client.on('connect', () => {
  console.log('Client connected:' + clientId)
  client.subscribe('channels/1773603/subscribe', { qos: 0 })
  client.publish('channels/1773603/publish', 'ws connection demo...!', { qos: 0, retain: false })
})

client.on('message', (topic, message, packet) => {
  console.log('Received Message: ' + message.toString() + '\nOn topic: ' + topic)
})

client.on('close', () => {
  console.log(clientId + ' disconnected')
})

function PublishToFan(fan){
  client.publish('channels/1773603/publish', 'field1=' + fan + '&status=MQTTPUBLISH', { qos: 0, retain: false })
}
function PublishToLight1(light1){
    client.publish('channels/1773603/publish', 'field2=' + light1 + '&status=MQTTPUBLISH', { qos: 0, retain: false })
}
function PublishToLight2(light2){
    client.publish('channels/1773603/publish', 'field3=' + light2 + '&status=MQTTPUBLISH', { qos: 0, retain: false })
}

$('div.fan').click(function(){
    PublishToFan(0);
});

$('div.light1').click(function(){
    PublishToLight1(0);
});

$('div.light2').click(function(){
    PublishToLight2(0);
});