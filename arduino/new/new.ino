// Define the pin number for PIR sensor
const int pirPin = 3;
int detectionCount = 0; // Variable to count detections

void setup() {
  Serial.begin(9600); // Initialize serial communication at 9600 baud rate
  pinMode(pirPin, INPUT); // Set PIR pin as input
}

void loop() {
  int pirState = digitalRead(pirPin); // Read the state of PIR sensor
  
  if (pirState == HIGH) { // If PIR sensor detects motion
    detectionCount++; // Increment the detection count
    Serial.print("Detection count: "); // Print the detection count label
    Serial.println(detectionCount); // Print the current detection count
    delay(500); // Delay to avoid counting multiple detections for a single motion
  }
}