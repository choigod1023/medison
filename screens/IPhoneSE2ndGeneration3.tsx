import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import StatePlaceholder from "../components/StatePlaceholder";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { StackNavigationProp } from "@react-navigation/stack";

import { useNavigation, ParamListBase } from "@react-navigation/native";
const IPhoneSE2ndGeneration3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphoneSe2ndGeneration}>
      <View
        style={[styles.iphoneSe2ndGenerationChild, styles.iphonePosition]}
      />
      <View style={[styles.navigationBarIpadMultit, styles.leadingFlexBox]}>
        <View style={styles.materials}>
          <View style={styles.materialsmodeOptions} />
        </View>
        <View style={[styles.windowGrabber, styles.leadingSpaceBlock]}>
          <Image
            style={styles.dotIcon}
            contentFit="cover"
            source={require("../assets/dot.png")}
          />
          <Image
            style={styles.dotIcon1}
            contentFit="cover"
            source={require("../assets/dot.png")}
          />
          <Image
            style={styles.dotIcon1}
            contentFit="cover"
            source={require("../assets/dot.png")}
          />
        </View>
        <View style={styles.prompt}>
          <Text style={[styles.prompt1, styles.prompt1FlexBox]}>
            This is a prompt message.
          </Text>
        </View>
        <View style={styles.titleAndControls}>
          <Pressable
            onPress={() => navigation.navigate("IPhoneSE2ndGeneration")}
          >
            <View style={[styles.leading, styles.leadingSpaceBlock]}>
              <Text style={[styles.chevron, styles.label1Typo]}>􀆉</Text>
              <Text style={styles.label}>이전</Text>
            </View>
          </Pressable>
          <Text style={styles.title}>전문가와 대화하기</Text>
          <View style={[styles.trailing, styles.leadingFlexBox]}>
            <Pressable
              onPress={() => navigation.navigate("IPhoneSE2ndGeneration")}
            >
              <View style={styles.trailingButton1}>
                <Text style={[styles.label1, styles.label1Typo]}>확인</Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.searchField}>
          <StatePlaceholder
            searchText="Search"
            showText={false}
            statePlaceholderPosition="unset"
            statePlaceholderBackgroundColor="rgba(120, 120, 128, 0.24)"
          />
        </View>
      </View>
      <View style={[styles.iphoneStatusBar, styles.iphonePosition]}>
        <Image
          style={[styles.batteryIcon, styles.topRowPosition]}
          contentFit="cover"
          source={require("../assets/battery1.png")}
        />
        <Image
          style={styles.timeIcon}
          contentFit="cover"
          source={require("../assets/time1.png")}
        />
        <View style={[styles.service, styles.leadingFlexBox]}>
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
      <View style={styles.keyboardsIphone}>
        <View style={styles.iphoneAlphabetQwerty}>
          <View style={styles.bottomRow}>
            <View style={[styles.keysLetter, styles.keysShadowBox7]}>
              <Text style={styles.letter}>ㅋ</Text>
            </View>
            <View style={[styles.keysLetter1, styles.keysShadowBox6]}>
              <Text style={styles.letter}>ㅌ</Text>
            </View>
            <View style={[styles.keysLetter2, styles.keysShadowBox5]}>
              <Text style={styles.letter}>ㅊ</Text>
            </View>
            <View style={[styles.keysLetter3, styles.keysShadowBox4]}>
              <Text style={styles.letter}>ㅍ</Text>
            </View>
            <View style={[styles.keysLetter4, styles.keysShadowBox3]}>
              <Text style={styles.letter}>ㅠ</Text>
            </View>
            <View style={[styles.keysLetter5, styles.keysShadowBox2]}>
              <Text style={styles.letter}>ㅜ</Text>
            </View>
            <View style={[styles.keysLetter6, styles.keysShadowBox1]}>
              <Text style={styles.letter}>ㅡ</Text>
            </View>
          </View>
          <View style={styles.middleRow}>
            <View style={[styles.keysLetter7, styles.keysShadowBox7]}>
              <Text style={styles.letter}>ㅁ</Text>
            </View>
            <View style={[styles.keysLetter8, styles.keysShadowBox6]}>
              <Text style={styles.letter}>ㄴ</Text>
            </View>
            <View style={[styles.keysLetter9, styles.keysShadowBox5]}>
              <Text style={styles.letter}>ㅇ</Text>
            </View>
            <View style={[styles.keysLetter10, styles.keysShadowBox4]}>
              <Text style={styles.letter}>ㄹ</Text>
            </View>
            <View style={[styles.keysLetter11, styles.keysShadowBox3]}>
              <Text style={styles.letter}>ㅎ</Text>
            </View>
            <View style={[styles.keysLetter12, styles.keysShadowBox2]}>
              <Text style={styles.letter}>ㅗ</Text>
            </View>
            <View style={[styles.keysLetter13, styles.keysShadowBox1]}>
              <Text style={styles.letter}>ㅓ</Text>
            </View>
            <View style={[styles.keysLetter14, styles.keysShadowBox7]}>
              <Text style={styles.letter}>ㅏ</Text>
            </View>
            <View style={[styles.keysLetter15, styles.keysShadowBox7]}>
              <Text style={styles.letter}>ㅣ</Text>
            </View>
          </View>
          <View style={[styles.topRow, styles.topRowPosition]}>
            <View style={[styles.keysLetter16, styles.keysShadowBox7]}>
              <Text style={[styles.letter16, styles.letterTypo1]}>ㅂ</Text>
            </View>
            <View style={[styles.keysLetter17, styles.keysShadowBox7]}>
              <Text style={[styles.letter17, styles.letterTypo1]}>ㅈ</Text>
            </View>
            <View style={[styles.keysLetter18, styles.keysShadowBox7]}>
              <Text style={[styles.letter18, styles.letterTypo1]}>ㄷ</Text>
            </View>
            <View style={[styles.keysLetter19, styles.keysShadowBox7]}>
              <Text style={[styles.letter18, styles.letterTypo1]}>ㄱ</Text>
            </View>
            <View style={[styles.keysLetter20, styles.keysShadowBox7]}>
              <Text style={[styles.letter18, styles.letterTypo1]}>ㅅ</Text>
            </View>
            <View style={[styles.keysLetter21, styles.keysShadowBox7]}>
              <Text style={[styles.letter18, styles.letterTypo1]}>ㅛ</Text>
            </View>
            <View style={[styles.keysLetter22, styles.keysShadowBox7]}>
              <Text style={[styles.letter18, styles.letterTypo1]}>ㅕ</Text>
            </View>
            <View style={[styles.keysLetter23, styles.keysShadowBox7]}>
              <Text style={[styles.letter18, styles.letterTypo1]}>ㅑ</Text>
            </View>
            <View style={[styles.keysLetter24, styles.keysShadowBox7]}>
              <Text style={[styles.letter18, styles.letterTypo1]}>ㅐ</Text>
            </View>
            <View style={[styles.keysLetter25, styles.keysShadowBox7]}>
              <Text style={[styles.letter18, styles.letterTypo1]}>ㅔ</Text>
            </View>
          </View>
          <Image
            style={[styles.keysIcon, styles.keysIconLayout]}
            contentFit="cover"
            source={require("../assets/-keys--icon.png")}
          />
          <Image
            style={[styles.keysIcon1, styles.keysIconLayout]}
            contentFit="cover"
            source={require("../assets/-keys--icon1.png")}
          />
        </View>
        <View style={styles.iphoneControllerPortrait}>
          <View style={[styles.keysLabelParent, styles.keysPosition]}>
            <View style={[styles.keysLabel, styles.keysShadowBox]}>
              <Text style={[styles.letter26, styles.letterTypo]}>123</Text>
            </View>
            <Image
              style={[styles.keysIcon2, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/-keys--icon2.png")}
            />
            <Image
              style={[styles.emojiIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/emoji.png")}
            />
          </View>
          <View style={[styles.space, styles.keysPosition]}>
            <Text style={[styles.letter27, styles.letterTypo]}>스페이스</Text>
          </View>
          <View style={[styles.keysLabel1, styles.letter28Layout]}>
            <Text style={[styles.letter28, styles.letter28Layout]}>확인</Text>
          </View>
        </View>
      </View>
      <Text style={styles.text}>
        부적절한 행동이 감지되면 제재될 수 있어요.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iphonePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  leadingFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  leadingSpaceBlock: {
    paddingVertical: Padding.p_2xs,
    flexDirection: "row",
  },
  prompt1FlexBox: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  label1Typo: {
    color: Color.colorsBlue1,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.bodyRegular,
  },
  topRowPosition: {
    right: 6,
    position: "absolute",
  },
  providerTypo: {
    fontWeight: "500",
    lineHeight: 12,
    letterSpacing: -0.1,
    fontFamily: FontFamily.sFProText,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.miscellaneousTextFieldBG,
  },
  keysShadowBox7: {
    backgroundColor: Color.darkPrimary,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    position: "absolute",
  },
  keysShadowBox6: {
    left: 38,
    backgroundColor: Color.darkPrimary,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    height: 43,
    top: 0,
    position: "absolute",
  },
  keysShadowBox5: {
    left: 76,
    backgroundColor: Color.darkPrimary,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    height: 43,
    top: 0,
    position: "absolute",
  },
  keysShadowBox4: {
    left: 114,
    backgroundColor: Color.darkPrimary,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    height: 43,
    top: 0,
    position: "absolute",
  },
  keysShadowBox3: {
    left: 152,
    backgroundColor: Color.darkPrimary,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    height: 43,
    top: 0,
    position: "absolute",
  },
  keysShadowBox2: {
    left: 190,
    backgroundColor: Color.darkPrimary,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    height: 43,
    top: 0,
    position: "absolute",
  },
  keysShadowBox1: {
    left: 228,
    backgroundColor: Color.darkPrimary,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    height: 43,
    top: 0,
    position: "absolute",
  },
  letterTypo1: {
    width: 31,
    fontWeight: "300",
    textTransform: "lowercase",
    fontSize: FontSize.size_5xl,
    top: "50%",
    marginTop: -15.5,
    textAlign: "center",
    color: Color.miscellaneousTextFieldBG,
    left: 0,
    position: "absolute",
  },
  keysIconLayout: {
    width: 42,
    borderRadius: Border.br_8xs,
    top: 116,
    position: "absolute",
  },
  keysPosition: {
    bottom: 3,
    top: 3,
  },
  keysShadowBox: {
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
  },
  letterTypo: {
    letterSpacing: -0.3,
    fontSize: FontSize.size_base,
    marginTop: -9.5,
    top: "50%",
    fontFamily: FontFamily.sFProText,
    textAlign: "center",
    color: Color.miscellaneousTextFieldBG,
    left: 0,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_8xs,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  letter28Layout: {
    width: 87,
    position: "absolute",
  },
  iphoneSe2ndGenerationChild: {
    backgroundColor: Color.colorGray_100,
    height: 67,
    top: 0,
  },
  materialsmodeOptions: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorGray_400,
    position: "absolute",
    width: "100%",
  },
  materials: {
    borderStyle: "solid",
    borderColor: Color.miscellaneousBarBorder,
    borderBottomWidth: 0.3,
    zIndex: 0,
    display: "none",
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  dotIcon: {
    height: 5,
    width: 5,
  },
  dotIcon1: {
    marginLeft: 3,
    height: 5,
    width: 5,
  },
  windowGrabber: {
    paddingHorizontal: Padding.p_3xs_5,
    zIndex: 1,
    display: "none",
  },
  prompt1: {
    height: "78.95%",
    width: "91.86%",
    top: "18.42%",
    left: "4.07%",
    fontSize: FontSize.footnoteRegular_size,
    lineHeight: 18,
    textAlign: "center",
    color: Color.miscellaneousTextFieldBG,
    fontFamily: FontFamily.bodyRegular,
    justifyContent: "center",
    display: "flex",
    letterSpacing: 0,
    position: "absolute",
  },
  prompt: {
    height: 38,
    zIndex: 2,
    alignSelf: "stretch",
    display: "none",
  },
  chevron: {
    textAlign: "center",
  },
  label: {
    textAlign: "left",
    color: Color.colorsBlue1,
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.bodyRegular,
    letterSpacing: 0,
    marginLeft: 3,
  },
  leading: {
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
    position: "absolute",
    left: 0,
    top: 0,
  },
  title: {
    top: "25%",
    left: "32.72%",
    fontWeight: "700",
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
    textAlign: "center",
    color: Color.miscellaneousTextFieldBG,
    letterSpacing: 0,
    position: "absolute",
  },
  label1: {
    textAlign: "right",
    letterSpacing: 0,
    fontWeight: "600",
  },
  trailingButton1: {
    flexDirection: "row",
  },
  trailing: {
    justifyContent: "flex-end",
    paddingTop: Padding.p_2xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_2xs,
    flexDirection: "row",
    right: 0,
    top: 0,
  },
  titleAndControls: {
    height: 44,
    zIndex: 3,
    alignSelf: "stretch",
  },
  searchField: {
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_12xs,
    paddingBottom: Padding.p_mini,
    zIndex: 4,
    alignSelf: "stretch",
    display: "none",
  },
  navigationBarIpadMultit: {
    top: 22,
    left: 4,
    width: 364,
    height: 41,
  },
  batteryIcon: {
    width: 27,
    height: 12,
    top: 5,
    right: 6,
  },
  timeIcon: {
    marginLeft: -15.4,
    left: "50%",
    height: 9,
    width: 32,
    top: 5,
    position: "absolute",
  },
  receptionIcon: {
    width: 17,
    height: 10,
  },
  provider: {
    marginLeft: 4,
    fontFamily: FontFamily.sFProText,
  },
  provider1: {
    fontFamily: FontFamily.sFProText,
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
  },
  letter: {
    fontWeight: "300",
    textTransform: "lowercase",
    fontSize: FontSize.size_5xl,
    top: "50%",
    marginTop: -15.5,
    fontFamily: FontFamily.sFProText,
    width: 32,
    textAlign: "center",
    color: Color.miscellaneousTextFieldBG,
    left: 0,
    position: "absolute",
  },
  keysLetter: {
    right: 228,
    height: 43,
    left: 0,
    top: 0,
  },
  keysLetter1: {
    right: 190,
  },
  keysLetter2: {
    right: 152,
  },
  keysLetter3: {
    right: 114,
  },
  keysLetter4: {
    right: 76,
  },
  keysLetter5: {
    right: 38,
  },
  keysLetter6: {
    right: 0,
  },
  bottomRow: {
    right: 57,
    left: 58,
    height: 43,
    top: 116,
    position: "absolute",
  },
  keysLetter7: {
    right: 304,
    height: 43,
    left: 0,
    top: 0,
  },
  keysLetter8: {
    right: 266,
  },
  keysLetter9: {
    right: 228,
  },
  keysLetter10: {
    right: 190,
  },
  keysLetter11: {
    right: 152,
  },
  keysLetter12: {
    right: 114,
  },
  keysLetter13: {
    right: 76,
  },
  keysLetter14: {
    left: 266,
    right: 38,
    height: 43,
    top: 0,
  },
  keysLetter15: {
    left: 304,
    height: 43,
    right: 0,
    top: 0,
  },
  middleRow: {
    top: 62,
    right: 17,
    left: 22,
    height: 43,
    position: "absolute",
  },
  letter16: {
    fontFamily: FontFamily.sFProDisplay,
  },
  keysLetter16: {
    right: 333,
    height: 43,
    left: 0,
    top: 0,
  },
  letter17: {
    fontFamily: FontFamily.sFProDisplay,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  keysLetter17: {
    right: 296,
    left: 37,
    height: 43,
    top: 0,
  },
  letter18: {
    fontFamily: FontFamily.sFProText,
  },
  keysLetter18: {
    right: 259,
    left: 74,
    height: 43,
    top: 0,
  },
  keysLetter19: {
    right: 222,
    left: 111,
    height: 43,
    top: 0,
  },
  keysLetter20: {
    right: 185,
    left: 148,
    height: 43,
    top: 0,
  },
  keysLetter21: {
    right: 148,
    left: 185,
    height: 43,
    top: 0,
  },
  keysLetter22: {
    right: 111,
    left: 222,
    height: 43,
    top: 0,
  },
  keysLetter23: {
    right: 74,
    left: 259,
    height: 43,
    top: 0,
  },
  keysLetter24: {
    right: 37,
    left: 296,
    height: 43,
    top: 0,
  },
  keysLetter25: {
    left: 333,
    height: 43,
    right: 0,
    top: 0,
  },
  topRow: {
    top: 8,
    left: 5,
    height: 43,
  },
  keysIcon: {
    left: 3,
    height: 43,
  },
  keysIcon1: {
    height: 42,
    right: 3,
  },
  iphoneAlphabetQwerty: {
    height: 169,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  letter26: {
    width: 40,
    position: "absolute",
  },
  keysLabel: {
    right: 85,
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  keysIcon2: {
    bottom: 1,
    left: 94,
    right: 0,
  },
  emojiIcon: {
    left: 47,
    right: 38,
    bottom: 0,
  },
  keysLabelParent: {
    width: 125,
    left: 3,
    position: "absolute",
  },
  letter27: {
    width: 143,
    position: "absolute",
  },
  space: {
    right: 97,
    left: 135,
    backgroundColor: Color.darkPrimary,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    position: "absolute",
  },
  letter28: {
    letterSpacing: -0.3,
    fontSize: FontSize.size_base,
    marginTop: -9.5,
    top: "50%",
    fontFamily: FontFamily.sFProText,
    textAlign: "center",
    color: Color.miscellaneousTextFieldBG,
    left: 0,
  },
  keysLabel1: {
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    bottom: 3,
    top: 3,
    right: 3,
  },
  iphoneControllerPortrait: {
    height: 49,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  keyboardsIphone: {
    top: 449,
    backgroundColor: Color.colorGray_300,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    top: 75,
    left: 86,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 22,
    textAlign: "center",
    color: Color.miscellaneousTextFieldBG,
    letterSpacing: 0,
    position: "absolute",
  },
  iphoneSe2ndGeneration: {
    backgroundColor: Color.colorDarkslategray_100,
    flex: 1,
    height: 667,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhoneSE2ndGeneration3;