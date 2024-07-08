import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import StatePlaceholder from "../components/StatePlaceholder";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

import { StackNavigationProp } from "@react-navigation/stack";

import { useNavigation, ParamListBase } from "@react-navigation/native";
const IPhoneSE2ndGenerationAI = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <>
      <View style={styles.iphoneSe2ndGenerationAi}>
        <View
          style={[styles.iphoneSe2ndGenerationAiChild, styles.iphonePosition]}
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
              onPress={() => {
                navigation.navigate("IPhoneSE2ndGeneration");
              }}
            >
              <View style={[styles.leading, styles.leadingSpaceBlock]}>
                <Text style={[styles.chevron, styles.label1Typo]}>􀆉</Text>
                <Text style={styles.label}>이전</Text>
              </View>
            </Pressable>
            <Text style={styles.title}>AI 대화로 찾기</Text>
            <View style={[styles.trailing, styles.leadingFlexBox]}>
              <View style={styles.trailingButton1}>
                <Text style={[styles.label1, styles.label1Typo]}>확인</Text>
              </View>
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
    fontFamily: "SFProText",
  },
  topRowPosition: {
    right: 6,
    position: "absolute",
  },
  providerTypo: {
    fontWeight: "500",
    lineHeight: 12,
    letterSpacing: -0.1,
    fontSize: FontSize.size_xs,
    fontFamily: "SFProText",
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
    fontFamily: "SFProText",
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
  iphoneSe2ndGenerationAiChild: {
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
    fontFamily: "SFProText",
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
    fontFamily: "SFProText",
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
    left: "36.57%",
    fontWeight: "700",
    fontFamily: "SFProDisplay",
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
    fontFamily: "SFProText",
  },
  provider1: {
    fontFamily: "SFProText",
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
    fontFamily: "SFProText",
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
    fontFamily: "SFProDisplay",
  },
  keysLetter16: {
    right: 333,
    height: 43,
    left: 0,
    top: 0,
  },
  letter17: {
    fontFamily: "SFProDisplay",
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
    fontFamily: "SFProText",
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
    fontFamily: "SFProText",
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
  iphoneSe2ndGenerationAi: {
    backgroundColor: Color.colorDarkslategray_100,
    flex: 1,
    height: 667,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhoneSE2ndGenerationAI;
