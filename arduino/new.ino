// Define the pin number for PIR sensor
const int pirPin = 3;

void setup() {
  Serial.begin(9600); // Initialize serial communication at 9600 baud rate
  pinMode(pirPin, INPUT); // Set PIR pin as input
}

void loop() {
  int pirState = digitalRead(pirPin); // Read the state of PIR sensor
  
  if (pirState == HIGH) { // If PIR sensor detects motion
    Serial.println("I'm alive"); // Print "I'm alive" to serial monitor
    Serial.println("kaloqn e gay");
    delay(1000); // Delay to avoid printing continuously for a single motion
  }
}
     