import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import StatePlaceholder from "./StatePlaceholder";
import { Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

export type NavigationBarIPadMultitType = {
  title?: string;
  showBackground?: boolean;
  showLeading?: boolean;
  showPrompt?: boolean;
  showSearch?: boolean;
  showTrailing?: boolean;
};

const NavigationBarIPadMultit = ({
  title = "이미지 스캔",
  showBackground = false,
  showLeading = true,
  showPrompt = false,
  showSearch = false,
  showTrailing = true,
}: NavigationBarIPadMultitType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.navigationBarIpadMultit}>
      {showBackground && (
        <View style={[styles.materials, styles.leadingPosition]}>
          <View style={styles.materialsmodeOptions} />
        </View>
      )}
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
      {showPrompt && (
        <View style={styles.prompt}>
          <Text style={styles.prompt1}>This is a prompt message.</Text>
        </View>
      )}
      <View style={styles.titleAndControls}>
        {showLeading && (
          <Pressable
            style={[styles.leading, styles.leadingSpaceBlock]}
            onPress={() => navigation.navigate("IPhoneSE2ndGeneration")}
          >
            <Text style={[styles.chevron, styles.labelTypo]}>􀆉</Text>
            <Text style={[styles.label, styles.labelTypo]}>이전</Text>
          </Pressable>
        )}
        <Text style={styles.title}>{title}</Text>
        {showTrailing && (
          <Pressable
            style={styles.trailing}
            onPress={() => navigation.navigate("IPhoneSE2ndGeneration")}
          >
            <View style={styles.trailingButton1}>
              <Text style={[styles.label1, styles.labelTypo]}>확인</Text>
            </View>
          </Pressable>
        )}
      </View>
      {showSearch && (
        <View style={styles.searchField}>
          <StatePlaceholder
            searchText="Search"
            showText={false}
            statePlaceholderPosition="unset"
            statePlaceholderBackgroundColor="rgba(120, 120, 128, 0.24)"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  leadingPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  leadingSpaceBlock: {
    paddingVertical: Padding.p_2xs,
    flexDirection: "row",
  },
  dotIconLayout: {
    height: 5,
    width: 5,
  },
  labelTypo: {
    color: Color.colorsBlue1,
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
    fontFamily: "SFProText",
  },
  materialsmodeOptions: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorGray_400,
    position: "absolute",
  },
  materials: {
    bottom: 0,
    borderStyle: "solid",
    borderColor: Color.miscellaneousBarBorder,
    borderBottomWidth: 0.3,
    overflow: "hidden",
    zIndex: 0,
    right: 0,
  },
  dotIcon1: {
    marginLeft: 3,
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
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    color: Color.miscellaneousTextFieldBG,
    fontFamily: "SFProText",
    letterSpacing: 0,
    alignItems: "center",
    position: "absolute",
  },
  prompt: {
    height: 38,
    zIndex: 2,
    alignSelf: "stretch",
  },
  chevron: {
    fontWeight: "600",
    color: Color.colorsBlue1,
    textAlign: "center",
  },
  label: {
    textAlign: "left",
    letterSpacing: 0,
    marginLeft: 3,
  },
  leading: {
    paddingHorizontal: Padding.p_5xs,
    left: 0,
    top: 0,
    position: "absolute",
    alignItems: "center",
  },
  title: {
    top: "25%",
    left: "39.12%",
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
    fontWeight: "600",
    color: Color.colorsBlue1,
    letterSpacing: 0,
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
    alignItems: "center",
    position: "absolute",
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
  },
  navigationBarIpadMultit: {
    top: 22,
    left: 4,
    width: 364,
    height: 41,
    alignItems: "center",
    position: "absolute",
  },
});

export default NavigationBarIPadMultit;
