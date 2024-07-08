import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
const IPhoneSE2ndGeneration6 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  return (
    <>
      <View
        style={[styles.iphoneSe2ndGeneration, styles.placeholderLabelFlexBox]}
      >
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
        <Image
          style={[styles.accountPic1, styles.accountPosition]}
          contentFit="cover"
          source={require("../assets/account-pic-1.png")}
        />
        <Image
          style={[styles.accountPic2, styles.accountPosition]}
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
            source={require("../assets/time2.png")}
          />
          <View style={[styles.service, styles.chromeFlexBox]}>
            <Image
              style={styles.receptionIcon}
              contentFit="cover"
              source={require("../assets/reception1.png")}
            />
            <Text style={[styles.provider, styles.providerTypo]}>LG U+</Text>
            <View style={styles.providerWrapper}>
              <Text style={[styles.provider1, styles.providerTypo]}>LTE</Text>
            </View>
          </View>
        </View>
        <Text style={[styles.text, styles.textClr]}>쇼핑하기</Text>
        <Text style={[styles.text1, styles.textTypo1]}>나의 맞춤 약</Text>
        <Text style={[styles.text2, styles.textTypo1]}>오늘의 메디슨 뉴스</Text>
        <View style={[styles.iphoneSe2ndGenerationItem, styles.iphoneLayout]} />
        <View
          style={[styles.iphoneSe2ndGenerationInner, styles.iphoneLayout]}
        />
        <Text style={[styles.text3, styles.textClr]}>7월 5일에 검색함</Text>
        <Text style={[styles.text4, styles.textTypo]}>타이레놀</Text>
        <View style={styles.rectangleView} />
        <Text style={styles.text5}>7월 5일에 검색함</Text>
        <Text style={[styles.text6, styles.textTypo]}>지르텍</Text>
        <View style={[styles.navigationBarIpadMultit, styles.chromeFlexBox]}>
          <View style={[styles.materials, styles.iphonePosition]}>
            <View style={[styles.chrome, styles.chromeFlexBox]} />
          </View>
          <View style={[styles.windowGrabber, styles.leadingSpaceBlock]}>
            <Image
              style={styles.dotIconLayout}
              contentFit="cover"
              source={require("../assets/dot.png")}
            />
            <Image
              style={[styles.dotIcon1, styles.dotIconLayout]}
              contentFit="cover"
              source={require("../assets/dot.png")}
            />
            <Image
              style={[styles.dotIcon1, styles.dotIconLayout]}
              contentFit="cover"
              source={require("../assets/dot.png")}
            />
          </View>
          <View style={styles.prompt}>
            <Text style={styles.prompt1}>This is a prompt message.</Text>
          </View>
          <View style={styles.titleAndControls}>
            <View style={[styles.leading, styles.leadingFlexBox]}>
              <Text style={[styles.chevron, styles.labelTypo]}>􀆉</Text>
              <Text style={[styles.label, styles.labelTypo]}>Label</Text>
            </View>
            <Text style={[styles.title, styles.titleTypo]}>Title</Text>
            <View style={[styles.trailing, styles.chromeFlexBox]}>
              <View style={styles.trailingButton1}>
                <Text style={[styles.text7, styles.labelTypo]}>􀓔</Text>
              </View>
            </View>
          </View>
          <View style={styles.searchField}>
            <View style={[styles.searchField1, styles.leadingFlexBox]}>
              <Text
                style={[styles.searchGlyph, styles.dictationTypo]}
              >{`􀊫`}</Text>
              <TextInput
                style={[styles.placeholderLabel, styles.dictationTypo]}
                numberOfLines={1}
                placeholder="검색하기"
              ></TextInput>
              <Text
                style={[styles.dictation, styles.dictationTypo]}
              >{`􀊱`}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  placeholderLabelFlexBox: {
    flex: 1,
    overflow: "hidden",
  },
  iphonePosition: {
    left: 0,
    position: "absolute",
  },
  accountPosition: {
    right: 24,
    position: "absolute",
  },
  iconPosition: {
    top: 5,
    position: "absolute",
  },
  chromeFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  providerTypo: {
    color: Color.miscellaneousTextFieldBG,
    fontFamily: "SFProText",
    fontWeight: "500",
    lineHeight: 12,
    letterSpacing: -0.1,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  textClr: {
    color: Color.labelsPrimary,
    fontFamily: "NaumSquareNeo",
    position: "absolute",
  },
  textTypo1: {
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    color: Color.labelsPrimary,
    fontFamily: "NaumSquareNeo",
    textAlign: "left",
    left: 25,
    position: "absolute",
  },
  iphoneLayout: {
    height: 210,
    width: 215,
    top: 272,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_2xl,
    top: 283,
    color: Color.labelsPrimary,
    fontFamily: "NaumSquareNeo",
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  leadingSpaceBlock: {
    paddingVertical: Padding.p_2xs,
    display: "none",
  },
  dotIconLayout: {
    height: 5,
    width: 5,
  },
  leadingFlexBox: {
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  labelTypo: {
    color: Color.colorsBlue,
    lineHeight: 22,
    fontSize: FontSize.headlineRegular_size,
    fontFamily: "SFProText",
  },
  titleTypo: {
    fontWeight: "600",
    textAlign: "center",
  },
  dictationTypo: {
    color: Color.labelsSecondary1,
    lineHeight: 22,
    fontSize: FontSize.headlineRegular_size,
    fontFamily: "SFProText",
  },
  iphoneSe2ndGenerationChild: {
    backgroundColor: Color.colorTomato,
    height: 67,
    right: 0,
    top: 0,
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
  accountPic2: {
    top: 114,
    width: 36,
    height: 36,
  },
  menu1Icon: {
    top: 30,
    width: 20,
    height: 26,
    left: 25,
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
    textAlign: "left",
  },
  provider1: {
    textAlign: "left",
  },
  providerWrapper: {
    paddingLeft: Padding.p_9xs,
    marginLeft: 4,
    flexDirection: "row",
  },
  service: {
    top: 4,
    left: 7,
    flexDirection: "row",
  },
  iphoneStatusBar: {
    top: 2,
    height: 20,
    right: 0,
  },
  text: {
    top: 118,
    fontSize: 28,
    fontWeight: "800",
    color: Color.labelsPrimary,
    fontFamily: "NaumSquareNeo",
    left: 24,
    textAlign: "left",
  },
  text1: {
    top: 238,
  },
  text2: {
    top: 510,
  },
  iphoneSe2ndGenerationItem: {
    left: 24,
    height: 210,
    width: 215,
    top: 272,
  },
  iphoneSe2ndGenerationInner: {
    left: 254,
  },
  text3: {
    top: 461,
    left: 143,
    textAlign: "right",
    color: Color.labelsPrimary,
    fontFamily: "NaumSquareNeo",
    fontSize: FontSize.size_xs,
  },
  text4: {
    left: 35,
  },
  rectangleView: {
    top: 548,
    width: 327,
    height: 114,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    left: 24,
    position: "absolute",
  },
  text5: {
    top: 689,
    left: 205,
    width: 137,
    height: 13,
    display: "flex",
    textAlign: "right",
    color: Color.labelsPrimary,
    fontFamily: "NaumSquareNeo",
    fontSize: FontSize.size_xs,
    alignItems: "center",
    position: "absolute",
  },
  text6: {
    left: 266,
  },
  chrome: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorGray_200,
    width: "100%",
  },
  materials: {
    bottom: 0,
    borderColor: Color.miscellaneousBarBorder1,
    borderBottomWidth: 0.3,
    zIndex: 0,
    display: "none",
    right: 0,
    top: 0,
    overflow: "hidden",
    borderStyle: "solid",
  },
  dotIcon1: {
    marginLeft: 3,
  },
  windowGrabber: {
    paddingHorizontal: Padding.p_3xs_5,
    zIndex: 1,
    flexDirection: "row",
  },
  prompt1: {
    height: "78.95%",
    width: "91.86%",
    top: "18.42%",
    left: "4.07%",
    fontSize: FontSize.footnoteRegular_size,
    lineHeight: 18,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "SFProText",
    letterSpacing: 0,
    display: "flex",
    color: Color.labelsPrimary,
    alignItems: "center",
    position: "absolute",
  },
  prompt: {
    height: 38,
    zIndex: 2,
    alignSelf: "stretch",
    display: "none",
  },
  chevron: {
    fontWeight: "600",
    textAlign: "center",
  },
  label: {
    letterSpacing: 0,
    textAlign: "left",
    marginLeft: 3,
  },
  leading: {
    paddingVertical: Padding.p_2xs,
    display: "none",
    left: 0,
    position: "absolute",
    top: 0,
  },
  title: {
    top: "25%",
    left: "45.55%",
    lineHeight: 22,
    fontSize: FontSize.headlineRegular_size,
    fontWeight: "600",
    fontFamily: "SFProText",
    letterSpacing: 0,
    display: "none",
    color: Color.labelsPrimary,
    position: "absolute",
  },
  text7: {
    textAlign: "right",
  },
  trailingButton1: {
    flexDirection: "row",
  },
  trailing: {
    justifyContent: "flex-end",
    paddingTop: Padding.p_2xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_2xs,
    display: "none",
    flexDirection: "row",
    right: 0,
    top: 0,
  },
  titleAndControls: {
    height: 44,
    zIndex: 3,
    alignSelf: "stretch",
    display: "none",
  },
  searchGlyph: {
    width: 25,
    textAlign: "left",
  },
  placeholderLabel: {
    height: 22,
    letterSpacing: 0,
    textAlign: "left",
    overflow: "hidden",
    flex: 1,
  },
  dictation: {
    textAlign: "center",
  },
  searchField1: {
    backgroundColor: Color.fillsTertiary1,
    paddingVertical: Padding.p_6xs,
    alignSelf: "stretch",
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_5xs,
  },
  searchField: {
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_12xs,
    paddingBottom: Padding.p_mini,
    zIndex: 4,
    alignSelf: "stretch",
  },
  navigationBarIpadMultit: {
    top: 175,
    right: 10,
    left: 8,
    height: 48,
  },
  iphoneSe2ndGeneration: {
    backgroundColor: Color.miscellaneousTextFieldBG,
    borderColor: Color.labelsPrimary,
    borderWidth: 1,
    height: 667,
    overflow: "hidden",
    width: "100%",
    borderStyle: "solid",
  },
});

export default IPhoneSE2ndGeneration6;
