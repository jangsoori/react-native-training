import React from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function ContactDetails({ route }) {
  const contactInfo = route.params.contact;
  return (
    <ScrollView>
      <Text>{JSON.stringify(contactInfo, null, 2)}</Text>
    </ScrollView>
  );
}
