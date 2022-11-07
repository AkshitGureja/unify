#include <PubSubClient.h>
#include "creds.h"
#include <ESP8266WiFi.h>
#include <WiFiClientSecure.h>
#include <stdlib.h>
int status = WL_IDLE_STATUS;
WiFiClient client;

PubSubClient mqttClient(client);

void field1(int val) {
  // Serial.print(" Field 1");
  // Serial.println(val);
  if (val == 49) {
    Serial.println("F1 On");
    digitalWrite(f1, HIGH);
  } else if (val == 48) {
    Serial.println("F1 Off");
    digitalWrite(f1, LOW);
  }
}
void field2(int val) {
  if (val == 49) {
    Serial.println("F2 On");
    digitalWrite(f2, HIGH);
  } else if (val == 48) {
    Serial.println("F2 Off");
    digitalWrite(f2, LOW);
  }
}
void field3(int val) {
  if (val == 49) {
    Serial.println("F3 On");
    digitalWrite(f3, HIGH);
  } else if (val == 48) {
    Serial.println("F3 Off");
    digitalWrite(f3, LOW);
  }
}

void mqttSubscriptionCallback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print(" ");
  Serial.print(topic[39]);
  Serial.print("] ");
  Serial.println(length);

  for (int i = 0; i < length; i++) {
    Serial.print(payload[i], DEC);
  }
  // const char * temp = payload;
  Serial.println();
  // Serial.println((char)payload,DEC);
  if (String(topic) == myTopic1) field1(payload[0]);
  if (String(topic) == myTopic2) field2(payload[0]);
  if (String(topic) == myTopic3) field3(payload[0]);
}

void mqttSubscribe(long subChannelID) {
  mqttClient.subscribe(myTopic1.c_str());
  Serial.println("Sub to topic1");
  mqttClient.subscribe(myTopic2.c_str());
  Serial.println("Sub to topic2");
  mqttClient.subscribe(myTopic3.c_str());
  Serial.println("Sub to topic3");
}

void mqttPublish(long pubChannelID, String message) {
  String topicString = "channels/" + String(pubChannelID) + "/publish";
  mqttClient.publish(topicString.c_str(), message.c_str());
}

void connectWifi() {
  Serial.print("Connecting to Wi-Fi... ");
  // Loop until WiFi connection is successful

  while (WiFi.waitForConnectResult() != WL_CONNECTED) {

    WiFi.begin(ssid, pass);
    delay(connectionDelay * 1000);
    Serial.print(WiFi.status());
  }
  Serial.println("Connected to Wi-Fi.");
}

// Connect to MQTT server.
void mqttConnect() {
  // Loop until connected.
  while (!mqttClient.connected()) {
    // Connect to the MQTT broker.
    if (mqttClient.connect(clientID, mqttUserName, mqttPass)) {
      Serial.print("MQTT to ");
      Serial.print(server);
      Serial.print(" at port ");
      Serial.print(mqttPort);
      Serial.println(" successful.");
    } else {
      Serial.print("MQTT connection failed, rc = ");
      // See https://pubsubclient.knolleary.net/api.html#state for the failure code explanation.
      Serial.print(mqttClient.state());
      Serial.println(" Will try again in a few seconds");
      delay(connectionDelay * 1000);
    }
  }
}


void setup() {
  Serial.begin(115200);
  // Delay to allow serial monitor to come up.
  delay(3000);
  // Connect to Wi-Fi network.
  pinMode(f1, OUTPUT);
  pinMode(f2, OUTPUT);
  pinMode(f3, OUTPUT);

  connectWifi();
  // Configure the MQTT client
  mqttClient.setServer(server, mqttPort);
  // Set the MQTT message handler function.
  mqttClient.setCallback(mqttSubscriptionCallback);
  // Set the buffer to handle the returned JSON. NOTE: A buffer overflow of the message buffer will result in your callback not being invoked.
  mqttClient.setBufferSize(2048);
  // Use secure MQTT connections if defined.

  // client.setFingerprint(thingspeak_cert_thumbprint);
}

void loop() {
  // Reconnect to WiFi if it gets disconnected.
  if (WiFi.status() != WL_CONNECTED) {
    connectWifi();
  }
  // Connect if MQTT client is not connected and resubscribe to channel updates.
  if (!mqttClient.connected()) {
    mqttConnect();
    mqttSubscribe(channelID);
  }
  // Call the loop to maintain connection to the server.
  mqttClient.loop();

  // Update ThingSpeak channel periodically. The update results in the message to the subscriber.
  // if ( (millis() - lastPublishMillis) > updateInterval*1000) {
  //   mqttPublish( channelID, (String("field1=")+String(WiFi.RSSI())) );
  //   lastPublishMillis = millis();
  // }
}