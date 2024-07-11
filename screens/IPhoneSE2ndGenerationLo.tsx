import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const IPhoneSE2ndGenerationLo = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <>
      <View style={styles.iphoneSe2ndGenerationLo}>
        <Pressable
          style={styles.tapScreenToContainer}
          onPress={() => {
            navigation.navigate("IPhone14Main");
          }}
        >
          <Image
            style={styles.loading11Icon}
            contentFit="cover"
            source={require("../assets/loading1-1.png")}
          />
        </Pressable>
        <Text style={styles.poweredBy}>Powered by</Text>
        <Image
          style={styles.loading21Icon}
          contentFit="cover"
          source={require("../assets/loading2-1.png")}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tapScreenToContainer: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  iconPosition: {
    top: 5,
    position: "absolute",
  },
  providerTypo: {
    textAlign: "left",
    fontFamily: "SFProText",
    fontWeight: "500",
    lineHeight: 12,
    letterSpacing: -0.1,
    fontSize: FontSize.size_xs,
    color: Color.miscellaneousTextFieldBG,
  },
  loading11Icon: {
    marginTop: -33.5,
    marginLeft: -92.5,
    top: "50%",
    width: 192,
    height: 72,
    left: "50%",
    position: "absolute",
  },
  poweredBy: {
    left: "33%",
    fontSize: FontSize.size_sm,
    fontFamily: "SFProDisplay",
    textAlign: "center",
    color: Color.miscellaneousTextFieldBG,
    top: "89.9%",
    position: "absolute",
  },
  loading21Icon: {
    left: "55%",
    width: 55,
    height: 17,
    top: "90.2%",
    position: "absolute",
  },
  provider: {
    marginLeft: 4,
  },
  providerWrapper: {
    paddingLeft: Padding.p_9xs,
    marginLeft: 4,
    flexDirection: "row",
  },
  iphoneSe2ndGenerationLo: {
    backgroundColor: Color.colorTomato,
    borderStyle: "solid",
    borderColor: Color.labelsPrimary,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 667,
    overflow: "hidden",
  },
});

export default IPhoneSE2ndGenerationLo;
