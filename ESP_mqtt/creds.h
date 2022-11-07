char ssid[] = "rtl@iiih";
char pass[] = "testing@123";
#define channelID 1773603
#define mqttPort 1883
const char mqttUserName[] = "DBkFMiQrDzcAFwAqIQkwNyM"; 
const char clientID[] = "DBkFMiQrDzcAFwAqIQkwNyM";
const char mqttPass[] = "mRjnE5rdkhsunCICgmSRvu/H";
const char* server = "mqtt3.thingspeak.com";
String myTopic1 = "channels/"+String( channelID )+"/subscribe/fields/field1";
String myTopic2 = "channels/"+String( channelID )+"/subscribe/fields/field2";
String myTopic3 = "channels/"+String( channelID )+"/subscribe/fields/field3";
#define f1 D0
#define f2 D1
#define f3 D2

long lastPublishMillis = 0;
int connectionDelay = 1;
int updateInterval = 1;