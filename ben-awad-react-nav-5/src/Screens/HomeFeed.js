import React from "react";
import Center from "../Components/shared/Center";
import { Button, FlatList, Text } from "react-native";
import faker from "faker";
export default function HomeFeed({ navigation }) {
  const [data, setData] = React.useState(
    Array.from(Array(50), () => faker.commerce.product())
  );
  console.log(data);
  return (
    <Center>
      <FlatList
        style={{ width: "100%" }}
        data={data}
        // showsVerticalScrollIndicator={false}
        keyExtractor={() => Math.random() * 10000}
        renderItem={({ item }) => (
          <Button
            title={item}
            onPress={() =>
              navigation.navigate("Item", {
                name: item,
              })
            }
          />
        )}
      />
    </Center>
  );
}
