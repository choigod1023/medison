import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
const IPhoneSE2ndGeneration4 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <>
      <View style={styles.iphoneSe2ndGeneration}>
        <View
          style={[styles.iphoneSe2ndGenerationChild, styles.iphonePosition]}
        />
        <Pressable
          onPress={() => {
            navigation.navigate("IPhoneSE2ndGeneration");
          }}
        >
          <Image
            style={styles.loading12Icon}
            contentFit="cover"
            source={require("../assets/loading1-2.png")}
          />
        </Pressable>
        <Text style={styles.text}>
          <Text style={styles.text1}>5</Text>
          <Text style={styles.text2}>{`일분 중 `}</Text>
          <Text style={styles.text1}>3</Text>
          <Text style={styles.text2}>일차</Text>
        </Text>
        <Image
          style={styles.accountPic1}
          contentFit="cover"
          source={require("../assets/account-pic-1.png")}
        />
        <Image
          style={styles.menu1Icon}
          contentFit="cover"
          source={require("../assets/menu-1.png")}
        />
        <View style={[styles.iphoneStatusBar, styles.iphonePosition]}>
          <Image
            style={[styles.batteryIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/battery1.png")}
          />
          <Image
            style={[styles.timeIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/time1.png")}
          />
          <View style={styles.service}>
            <Image
              style={styles.receptionIcon}
              contentFit="cover"
              source={require("../assets/reception1.png")}
            />
            <Text style={[styles.provider, styles.textTypo5]}>LG U+</Text>
            <View style={styles.providerWrapper}>
              <Text style={styles.textTypo5}>LTE</Text>
            </View>
          </View>
        </View>
        <Text style={[styles.text5, styles.textTypo4]}>진통제</Text>
        <View
          style={[styles.iphoneSe2ndGenerationItem, styles.rectangleViewLayout]}
        />
        <Text style={[styles.text6, styles.textTypo5]}>완료</Text>
        <View
          style={[styles.iphoneSe2ndGenerationInner, styles.lineViewLayout]}
        />
        <Image
          style={[styles.tylenolEr1, styles.tylenolEr1Layout]}
          contentFit="cover"
          source={require("../assets/tylenol-er-1.png")}
        />
        <Text style={[styles.text7, styles.textTypo3]}>타이레놀</Text>
        <Text style={[styles.text8, styles.textTypo2]}>이알서방 정</Text>
        <Text style={[styles.text9, styles.textTypo]}>
          <Text style={styles.text1}>두 알</Text>
          <Text style={styles.text2}> 드세요.</Text>
        </Text>
        <Text style={[styles.text12, styles.text12Position]}>진통제</Text>
        <View style={[styles.rectangleView, styles.text12Position]} />
        <Text style={[styles.text13, styles.textTypo5]}>완료</Text>
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <Text style={[styles.text14, styles.text14Position]}>슈다페드</Text>
        <Text style={[styles.text15, styles.textTypo2]}>정</Text>
        <Text style={[styles.text16, styles.textTypo]}>
          <Text style={styles.text1}>한 알</Text>
          <Text style={styles.text2}> 드세요.</Text>
        </Text>
        <Image
          style={[styles.shdaped1Icon, styles.text14Position]}
          contentFit="cover"
          source={require("../assets/shdaped-1.png")}
        />
        <Text style={[styles.text19, styles.textTypo]}>아침 복용분이에요.</Text>
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
  textTypo5: {
    textAlign: "left",
    color: Color.miscellaneousTextFieldBG,
    fontFamily: FontFamily.sFProText,
    fontWeight: "500",
    lineHeight: 12,
    letterSpacing: -0.1,
    fontSize: FontSize.size_xs,
  },
  textTypo4: {
    fontSize: FontSize.size_xl,
    color: Color.labelsPrimary,
    textAlign: "center",
    fontFamily: FontFamily.nanumSquareNeo,
  },
  rectangleViewLayout: {
    height: 23,
    width: 53,
    borderRadius: Border.br_4xl,
    backgroundColor: Color.colorTomato,
  },
  lineViewLayout: {
    height: 1,
    width: 289,
    borderTopWidth: 1,
    position: "absolute",
    borderColor: Color.labelsPrimary,
    borderStyle: "solid",
  },
  tylenolEr1Layout: {
    height: 113,
    width: 112,
    left: 49,
  },
  textTypo3: {
    fontSize: FontSize.size_15xl,
    color: Color.labelsPrimary,
    textAlign: "center",
    fontFamily: FontFamily.nanumSquareNeo,
    fontWeight: "800",
  },
  textTypo2: {
    fontSize: FontSize.size_3xl,
    color: Color.labelsPrimary,
    textAlign: "center",
    fontFamily: FontFamily.nanumSquareNeo,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.nanumSquareNeo,
    position: "absolute",
  },
  text12Position: {
    top: 398,
    position: "absolute",
  },
  text14Position: {
    top: 448,
    position: "absolute",
  },
  iphoneSe2ndGenerationChild: {
    top: 0,
    height: 67,
    backgroundColor: Color.colorTomato,
    width: 375,
    left: 0,
  },
  loading12Icon: {
    width: 115,
    height: 43,
    position: "absolute",
    top: 20,
    left: "51%",
    transform: [{ translateX: -57.5 }],
  },
  text1: {
    color: Color.colorTomato,
  },
  text2: {
    color: Color.labelsPrimary,
  },
  text: {
    top: 110,
    left: 68,
    fontSize: 36,
    textAlign: "center",
    fontFamily: FontFamily.nanumSquareNeo,
    fontWeight: "800",
    position: "absolute",
  },
  accountPic1: {
    top: 26,
    left: 320,
    width: 31,
    height: 31,
    position: "absolute",
  },
  menu1Icon: {
    top: 28,
    left: 25,
    width: 20,
    height: 26,
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
    width: 375,
    left: 0,
  },
  text5: {
    left: 45,
    top: 193,
    position: "absolute",
  },
  iphoneSe2ndGenerationItem: {
    left: 277,
    top: 193,
    position: "absolute",
  },
  text6: {
    top: 199,
    left: 293,
    position: "absolute",
  },
  iphoneSe2ndGenerationInner: {
    top: 220,
    left: 44,
  },
  tylenolEr1: {
    top: 242,
    position: "absolute",
  },
  text7: {
    top: 243,
    left: 201,
    position: "absolute",
  },
  text8: {
    top: 283,
    left: 211,
  },
  text9: {
    top: 326,
    left: 216,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
  },
  text12: {
    left: 43,
    fontSize: FontSize.size_xl,
    color: Color.labelsPrimary,
    textAlign: "center",
    fontFamily: FontFamily.nanumSquareNeo,
  },
  rectangleView: {
    left: 275,
    height: 23,
    width: 53,
    borderRadius: Border.br_4xl,
    backgroundColor: Color.colorTomato,
  },
  text13: {
    top: 404,
    left: 291,
    position: "absolute",
  },
  lineView: {
    top: 425,
    left: 42,
  },
  text14: {
    left: 199,
    fontSize: FontSize.size_15xl,
    color: Color.labelsPrimary,
    textAlign: "center",
    fontFamily: FontFamily.nanumSquareNeo,
    fontWeight: "800",
  },
  text15: {
    top: 488,
    left: 254,
  },
  text16: {
    top: 531,
    left: 214,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
  },
  shdaped1Icon: {
    height: 113,
    width: 112,
    left: 49,
  },
  text19: {
    top: 594,
    left: 91,
    fontSize: FontSize.size_5xl,
    color: Color.labelsPrimary,
  },
  iphoneSe2ndGeneration: {
    backgroundColor: Color.miscellaneousTextFieldBG,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 667,
    overflow: "hidden",
    borderColor: Color.labelsPrimary,
    borderStyle: "solid",
  },
});

export default IPhoneSE2ndGeneration4;
