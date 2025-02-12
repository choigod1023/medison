import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import NavigationBarIPadMultit from "../components/NavigationBarIPadMultit";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

import { useNavigation, ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
const IPhoneSE2ndGeneration2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <>
      <View style={styles.iphoneSe2ndGeneration}>
        <View
          style={[styles.iphoneSe2ndGenerationChild, styles.iphonePosition]}
        />
        <View
          style={[styles.iphoneSe2ndGenerationItem, styles.iphonePosition]}
        />
        <View
          style={[styles.iphoneSe2ndGenerationInner, styles.iphonePosition]}
        />
        <Text style={styles.qr}>
          의약품 또는 약 봉투의 QR코드를 사각형 안에 놓으세요.
        </Text>
        <View style={styles.frameView}>
          <View style={styles.frameChild} />
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate("IPhoneSE2ndGenerationAI");
          }}
        >
          <Text style={styles.ai}>AI 대화로 찾기</Text>
        </Pressable>
        <NavigationBarIPadMultit
          title="이미지 스캔"
          showBackground={false}
          showLeading
          showPrompt={false}
          showSearch={false}
          showTrailing
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  iphonePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    top: 5,
    position: "absolute",
  },
  providerTypo: {
    textAlign: "left",
    fontFamily: "SFProText",
    lineHeight: 12,
    letterSpacing: -0.1,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    color: Color.miscellaneousTextFieldBG,
  },
  iphoneSe2ndGenerationChild: {
    top: 0,
    height: 67,
    backgroundColor: Color.colorGray_100,
    width: 375,
    left: 0,
  },
  iphoneSe2ndGenerationItem: {
    top: 67,
    backgroundColor: "#d9d9d9",
    height: 375,
    left: 0,
    width: 375,
  },
  iphoneSe2ndGenerationInner: {
    top: 441,
    height: 226,
    backgroundColor: Color.colorGray_100,
    width: 375,
    left: 0,
  },
  qr: {
    marginTop: 143.5,
    paddingLeft: "10%",
    paddingRight: "10%",
    top: "50%",
    fontSize: FontSize.size_xl,
    lineHeight: 28,
    textAlign: "center",
    color: Color.miscellaneousTextFieldBG,
    fontFamily: "SFProDisplay",
    letterSpacing: 0,
    position: "absolute",
  },
  frameChild: {
    alignSelf: "stretch",
    borderRadius: 13,
    backgroundColor: Color.colorTomato,
    height: 49,
  },
  frameView: {
    top: 556,
    left: 35,
    width: 305,
    padding: 10,
    position: "absolute",
  },
  ai: {
    top: 576,
    left: 135,
    fontSize: FontSize.size_lg,
    lineHeight: 27,
    fontWeight: "500",
    textAlign: "center",
    color: Color.miscellaneousTextFieldBG,
    fontFamily: "SFProDisplay",
    letterSpacing: 0,
    position: "absolute",
  },
  batteryIcon: {
    right: 6,
    width: 27,
    height: 12,
  },
  timeIcon: {
    marginLeft: -15.4,
    width: 32,
    height: 9,
    left: "50%",
    top: 5,
  },
  receptionIcon: {
    width: 17,
    height: 10,
  },
  provider: {
    marginLeft: 4,
  },
  providerWrapper: {
    paddingLeft: Padding.p_9xs,
    marginLeft: 4,
    flexDirection: "row",
  },
  service: {
    top: 4,
    left: 7,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iphoneStatusBar: {
    top: 2,
    height: 20,
    left: 0,
    width: 375,
  },
  iphoneSe2ndGeneration: {
    backgroundColor: Color.miscellaneousTextFieldBG,
    borderStyle: "solid",
    borderColor: Color.labelsPrimary,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 667,
    overflow: "hidden",
  },
});

export default IPhoneSE2ndGeneration2;
