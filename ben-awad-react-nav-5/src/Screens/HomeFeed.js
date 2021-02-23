import React from "react";
import Center from "../Components/shared/Center";
import { Button, FlatList, Text } from "react-native";
import { DataContext } from "../Context/DataProvider";
export default function HomeFeed({ navigation }) {
  const { data } = React.useContext(DataContext);
  console.log(data);

  return (
    <Center>
      <FlatList
        style={{ width: "100%" }}
        data={data}
        // showsVerticalScrollIndicator={false}
        //Yes, Below It's bad, I know :)
        keyExtractor={() => (Math.random() * 10000).toString()}
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
