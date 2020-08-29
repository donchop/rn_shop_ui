import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartItem = ({ item: { quantity, productTitle, sum }, onRemove, deletable }) => {
  return (
    <View style={styles.cartItem}>
      <Text style={styles.itemInfo} >
        <Text style={styles.mainText}>{productTitle}</Text>
        <Text style={styles.quantity}> x {quantity}шт. </Text>
      </Text>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>${sum.toFixed(2)}</Text>
      {deletable &&  <TouchableOpacity onPress={onRemove} style={styles.deleteButton}>
          <Ionicons
            name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
            size={23}
            color="red"
          />
        </TouchableOpacity>}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  itemInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  itemData: {
    width: "30%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'flex-end'
  },
  quantity: {
    fontFamily: "open-sans",
    color: "#888",
    fontSize: 16,
  },
  mainText: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
  deleteButton: {
    marginLeft: 20,
  },
});

export default CartItem;
