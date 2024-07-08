import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
const IPhoneSE2ndGeneration5 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <>
      <View style={styles.iphoneSe2ndGeneration}>
        <View style={styles.iphoneSe2ndGenerationChild} />
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
        <View style={styles.iphoneStatusBar}>
          <Image
            style={[styles.batteryIcon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/battery1.png")}
          />
          <Image
            style={[styles.timeIcon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/time2.png")}
          />
          <View style={styles.service}>
            <Image
              style={styles.receptionIcon}
              contentFit="cover"
              source={require("../assets/reception1.png")}
            />
            <Text style={[styles.provider, styles.providerTypo]}>LG U+</Text>
            <View style={styles.providerWrapper}>
              <Text style={styles.providerTypo}>LTE</Text>
            </View>
          </View>
        </View>
        <Text style={[styles.text, styles.providerTypo]}>완료</Text>
        <Image
          style={styles.tylenolEr1}
          contentFit="cover"
          source={require("../assets/tylenol-er-11.png")}
        />
        <Text style={[styles.text1, styles.textTypo4]}>타이레놀</Text>
        <Text style={[styles.text2, styles.textTypo4]}>이알서방 정</Text>
        <Text style={[styles.text3, styles.textTypo2]}>이런 효능이 있어요</Text>
        <Image
          style={[styles.information1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/information-1.png")}
        />
        <Text style={[styles.text4, styles.textLayout2]}>
          감기로 인한 발염열 및 동통(통증), 두통, 신경통, 근육통, 월경통,
          염좌통(삔 통증)
        </Text>
        <View
          style={[styles.iphoneSe2ndGenerationItem, styles.text5Position]}
        />
        <Text style={[styles.text5, styles.textFlexBox]}>
          + 치통, 관절통, 류마티양 동통(통증)에도 쓸 수 있어요
        </Text>
        <Text style={[styles.text6, styles.textTypo2]}>이런 효능이 있어요</Text>
        <Image
          style={[styles.information3Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/information-1.png")}
        />
        <Text style={[styles.text7, styles.textLayout2]}>
          매일 세 잔 이상 정기적으로 술을 마시거나, 이 약이나 다른 해열진통제를
          복용해야 할 경우 반드시 의사 또는 약사와 상의해야 해요. 간 손상이
          유발될 수 있어요.
        </Text>
        <Text style={[styles.text8, styles.textTypo2]}>이렇게 드세요</Text>
        <Image
          style={[styles.information2Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/information-1.png")}
        />
        <Text style={[styles.text9, styles.textLayout2]}>
          <Text style={styles.text10}>{`만 12세 이상 소아 및 성인
`}</Text>
          <Text style={styles.textTypo2}>
            1회 1~2정씩 1일 3~4회 (4~6시간마다) 필요시 복용
          </Text>
        </Text>
        <View
          style={[styles.iphoneSe2ndGenerationInner, styles.text12Position]}
        />
        <Text style={[styles.text12, styles.text12Position]}>
          오늘 1번 더 드실 수 있어요
        </Text>
        <View style={[styles.rectangleView, styles.textLayout]} />
        <View
          style={[
            styles.iphoneSe2ndGenerationChild1,
            styles.iphoneChildPosition,
          ]}
        />
        <View
          style={[styles.iphoneSe2ndGenerationChild2, styles.text13Position]}
        />
        <Text style={[styles.text13, styles.textTypo]}>공유하기</Text>
        <Text style={[styles.text14, styles.textTypo]}>{`􀈂 `}</Text>
        <Text style={[styles.text15, styles.textLayout]}>다른 약 찾기</Text>
        <Text style={[styles.text16, styles.iphoneChildPosition]}>
          더 알아보기
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  iconPosition1: {
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
  textTypo4: {
    color: Color.labelsPrimary,
    textAlign: "center",
    fontFamily: "NaumSquareNeo",
    position: "absolute",
  },
  textTypo2: {
    fontWeight: "700",
    fontFamily: "NaumSquareNeo",
  },
  iconPosition: {
    left: 21,
    height: 20,
    width: 20,
    position: "absolute",
  },
  textLayout2: {
    lineHeight: 18,
    marginRight: 40,
    fontSize: FontSize.footnoteRegular_size,
  },
  text5Position: {
    height: 19,
    width: 293,
    top: 319,
    left: 45,
    position: "absolute",
  },
  textFlexBox: {
    justifyContent: "center",
    display: "flex",
    fontWeight: "700",
    fontFamily: "NaumSquareNeo",
    alignItems: "center",
  },
  text12Position: {
    width: 150,
    top: 432,
    height: 19,
    left: 45,
    position: "absolute",
  },
  textLayout: {
    height: 32,
    top: 593,
  },
  iphoneChildPosition: {
    left: 200,
    width: 130,
    position: "absolute",
  },
  text13Position: {
    top: 198,
    height: 32,
  },
  textTypo: {
    lineHeight: 24,
    fontSize: FontSize.bodyRegular_size,
    textAlign: "center",
    color: Color.miscellaneousTextFieldBG,
    position: "absolute",
  },
  iphoneSe2ndGenerationChild: {
    top: 0,
    height: 67,
    width: 375,
    backgroundColor: Color.colorTomato,
    left: 0,
    position: "absolute",
  },
  loading12Icon: {
    width: 115,
    height: 43,
    position: "absolute",
    top: 20,
    left: "51%",
    transform: [{ translateX: -57.5 }],
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
    height: 26,
    width: 20,
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
    opacity: 0.99,
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
    position: "absolute",
  },
  text: {
    top: 195,
    left: 293,
    position: "absolute",
  },
  tylenolEr1: {
    top: 108,
    left: 35,
    width: 120,
    height: 121,
    position: "absolute",
  },
  text1: {
    top: 111,
    left: 201,
    fontSize: FontSize.size_15xl,
    fontWeight: "800",
    textAlign: "center",
  },
  text2: {
    top: 153,
    left: 211,
    fontSize: FontSize.size_3xl,
    textAlign: "center",
  },
  text3: {
    top: 254,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    left: 45,
    color: Color.labelsPrimary,
    textAlign: "left",
    position: "absolute",
  },
  information1Icon: {
    top: 253,
  },
  text4: {
    top: 279,
    fontWeight: "700",
    fontFamily: "NaumSquareNeo",
    left: 45,
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
    color: Color.labelsPrimary,
    textAlign: "left",
    position: "absolute",
  },
  iphoneSe2ndGenerationItem: {
    borderRadius: Border.br_2xl,
    backgroundColor: Color.colorTomato,
  },
  text5: {
    lineHeight: 16,
    fontSize: FontSize.size_smi_5,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.miscellaneousTextFieldBG,
    height: 19,
    width: 293,
    top: 319,
    left: 45,
    position: "absolute",
  },
  text6: {
    top: 482,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    left: 45,
    color: Color.labelsPrimary,
    textAlign: "left",
    position: "absolute",
  },
  information3Icon: {
    top: 481,
  },
  text7: {
    top: 508,
    fontWeight: "700",
    fontFamily: "NaumSquareNeo",
    left: 45,
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
    color: Color.labelsPrimary,
    textAlign: "left",
    position: "absolute",
  },
  text8: {
    top: 367,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    left: 45,
    color: Color.labelsPrimary,
    textAlign: "left",
    position: "absolute",
  },
  information2Icon: {
    top: 366,
  },
  text10: {
    fontFamily: "NaumSquareNeo",
  },
  text9: {
    top: 392,
    left: 45,
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
    color: Color.labelsPrimary,
    textAlign: "left",
    position: "absolute",
  },
  iphoneSe2ndGenerationInner: {
    borderRadius: Border.br_2xl,
    backgroundColor: Color.colorTomato,
  },
  text12: {
    justifyContent: "center",
    display: "flex",
    fontWeight: "700",
    fontFamily: "NaumSquareNeo",
    alignItems: "center",
    lineHeight: 16,
    fontSize: FontSize.size_smi_5,
    textAlign: "center",
    color: Color.miscellaneousTextFieldBG,
  },
  rectangleView: {
    width: 130,
    height: 32,
    top: 593,
    left: 45,
    position: "absolute",
    borderRadius: Border.br_14xl,
    backgroundColor: Color.colorTomato,
  },
  iphoneSe2ndGenerationChild1: {
    height: 32,
    top: 593,
    borderRadius: Border.br_14xl,
    backgroundColor: Color.colorTomato,
    left: 200,
  },
  iphoneSe2ndGenerationChild2: {
    left: 200,
    width: 130,
    position: "absolute",
    borderRadius: Border.br_14xl,
    backgroundColor: Color.colorTomato,
  },
  text13: {
    left: 225,
    width: 105,
    top: 198,
    height: 32,
    justifyContent: "center",
    display: "flex",
    fontWeight: "700",
    fontFamily: "NaumSquareNeo",
    alignItems: "center",
  },
  text14: {
    top: 202,
    left: 219,
    fontFamily: "SFProText",
  },
  text15: {
    width: 130,
    height: 32,
    top: 593,
    left: 45,
    position: "absolute",
    justifyContent: "center",
    display: "flex",
    fontWeight: "700",
    fontFamily: "NaumSquareNeo",
    alignItems: "center",
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
    textAlign: "center",
    color: Color.miscellaneousTextFieldBG,
  },
  text16: {
    height: 32,
    top: 593,
    left: 200,
    justifyContent: "center",
    display: "flex",
    fontWeight: "700",
    fontFamily: "NaumSquareNeo",
    alignItems: "center",
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
    textAlign: "center",
    color: Color.miscellaneousTextFieldBG,
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

export default IPhoneSE2ndGeneration5;
