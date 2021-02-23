import React from "react";
import { Text } from "react-native";
import Center from "../Components/shared/Center";

const apiCall = (x) => {
  return x;
};
export default function EditItem({ route, navigation }) {
  const [formData, setFormData] = React.useState();
  const submit = React.useRef(() => {});

  //Submit function
  submit.current = () => {
    //API call with new form state
    apiCall(formData);
    navigation.goBack();
  };

  React.useEffect(() => {
    navigation.setParams({ submit });
  }, []);
  return (
    <Center>
      <Text>Edit Product - {route.params.name}</Text>
    </Center>
  );
}
