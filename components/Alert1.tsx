import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Alert1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.alert}>
      <View style={styles.material}>
        <View style={styles.regular} />
      </View>
      <View style={[styles.titleAndDescription, styles.buttonsSpaceBlock]}>
        <Text
          style={[styles.aShortTitle, styles.aShortTitleFlexBox]}
        >{`'메디슨'이(가) 사용자의 카메라에
접근하려고 합니다.`}</Text>
        <Text style={[styles.aDescriptionShould, styles.aShortTitleFlexBox]}>
          카메라 사용을 허가해주세요.
        </Text>
        <View style={styles.frame}>
          <View style={styles.textField}>
            <View style={styles.frame1}>
              <View style={styles.cursor} />
              <Text style={styles.value}>Placeholder</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.buttons, styles.buttonsSpaceBlock]}>
        <Pressable
          style={styles.button1}
          onPress={() => navigation.navigate("IPhoneSE2ndGeneration")}
        >
          <Text style={[styles.title, styles.titlePosition]}>허용 안 함</Text>
        </Pressable>
        <View style={styles.separator} />
        <Pressable
          style={styles.button1}
          onPress={() => navigation.navigate("IPhoneSE2ndGeneration2")}
        >
          <Text style={[styles.title1, styles.titlePosition]}>확인</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsSpaceBlock: {
    marginTop: 2,
    width: 270,
  },
  aShortTitleFlexBox: {
    textAlign: "center",
    color: Color.labelsPrimary,
    fontFamily: FontFamily.bodyRegular,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  titlePosition: {
    color: Color.colorsBlue,
    marginTop: -11,
    textAlign: "center",
    fontFamily: FontFamily.bodyRegular,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.bodyRegular_size,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  regular: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorDarkgray,
    position: "absolute",
  },
  material: {
    right: 0,
    bottom: 0,
    zIndex: 0,
    left: 0,
    top: 0,
    overflow: "hidden",
    position: "absolute",
  },
  aShortTitle: {
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
    textAlign: "center",
    color: Color.labelsPrimary,
  },
  aDescriptionShould: {
    fontSize: FontSize.footnoteRegular_size,
    lineHeight: 18,
  },
  cursor: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorsBlue,
    width: 2,
    height: 21,
    zIndex: 1,
  },
  value: {
    color: Color.labelsTertiary,
    textAlign: "left",
    marginLeft: -2,
    fontFamily: FontFamily.bodyRegular,
    letterSpacing: 0,
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
    zIndex: 0,
  },
  frame1: {
    width: 56,
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_11xs,
    flexDirection: "row",
    left: 0,
    top: 0,
    alignItems: "center",
    position: "absolute",
  },
  textField: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.miscellaneousTextFieldBG,
    borderColor: Color.miscellaneousTextFieldOutline,
    borderWidth: 0.5,
    height: 27,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  frame: {
    paddingTop: Padding.p_sm,
    display: "none",
    alignSelf: "stretch",
    alignItems: "center",
  },
  titleAndDescription: {
    paddingHorizontal: Padding.p_base,
    paddingBottom: Padding.p_mini,
    zIndex: 1,
    alignItems: "center",
  },
  title: {
    marginLeft: -36.4,
  },
  button1: {
    flex: 1,
    borderColor: Color.miscellaneousAlertMenuActionSheetSeparators,
    borderTopWidth: 0.3,
    height: 44,
    borderStyle: "solid",
  },
  separator: {
    backgroundColor: Color.miscellaneousAlertMenuActionSheetSeparators,
    width: 0,
    height: 44,
  },
  title1: {
    marginLeft: -16.4,
    fontWeight: "600",
  },
  buttons: {
    zIndex: 2,
    flexDirection: "row",
  },
  alert: {
    marginTop: -70.5,
    marginLeft: -134.5,
    borderRadius: Border.br_sm,
    justifyContent: "center",
    paddingTop: Padding.p_lgi,
    alignItems: "center",
    overflow: "hidden",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
});

export default Alert1;
