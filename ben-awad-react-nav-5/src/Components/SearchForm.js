import React from "react";
import { Button } from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { DataContext } from "../Context/DataProvider";
import Center from "./shared/Center";

export default function SearchForm({ navigation }) {
  const { data } = React.useContext(DataContext);
  const [results, setResults] = React.useState(null);
  const [search, setSearch] = React.useState("");
  console.log(results);
  React.useEffect(() => {
    setResults(
      data.filter((item) => item.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);
  React.useEffect(() => {
    return () => {
      setResults(null);
    };
  }, []);

  console.log(search);
  return (
    <Center>
      <TextInput
        placeholder="Search items"
        onChangeText={(text) => {
          text.length > 1 && setSearch(text);
        }}
      />
      <FlatList
        data={results}
        keyExtractor={() => (Math.random() * 10000).toString()}
        renderItem={({ item }) =>
          search.length > 0 && (
            <Button
              title={item}
              onPress={() =>
                navigation.navigate("Item", {
                  name: item,
                })
              }
            />
          )
        }
      />
    </Center>
  );
}
