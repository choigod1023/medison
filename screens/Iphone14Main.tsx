import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const IPhone1415ProMax = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax}>
      <Text style={[styles.text, styles.textTypo]}>빠른 찾기</Text>
      <View style={[styles.iphone1415ProMaxChild, styles.childPosition]} />
      <View style={[styles.iphone1415ProMaxItem, styles.iphone1415Position]} />
      <View style={[styles.loading12Parent, styles.loading12Position]}>
        <Image
          style={[styles.loading12Icon, styles.loading12Position]}
          contentFit="cover"
          source={require("../assets/loading1-2.png")}
        />
        <Image
          style={[styles.accountPic1, styles.menu1IconPosition]}
          contentFit="cover"
          source={require("../assets/account-pic-1.png")}
        />
        <Image
          style={[styles.menu1Icon, styles.menu1IconPosition]}
          contentFit="cover"
          source={require("../assets/menu-1.png")}
        />
      </View>
      <Text style={styles.text1}>{`이름을 알고있다면? `}</Text>
      <Text style={styles.text2}>직접 검색하기</Text>
      <Text style={[styles.text3, styles.textTypo]}>일반 사용자 모드</Text>
      <Pressable
        onPress={() => {
          navigation.navigate("IPhoneSE2ndGeneration2");
        }}
      >
        <View style={[styles.rectangleParent, styles.groupPosition]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Image
            style={[styles.qrcode1Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/qrcode-1.png")}
          />
          <Text style={[styles.qr, styles.qrTypo]}>QR코드로 찾기</Text>
        </View>
      </Pressable>

      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Image
          style={[styles.qrcode1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/qrcode-1.png")}
        />
        <Text style={[styles.qr, styles.qrTypo]}>QR코드로 찾기</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.text4, styles.qrTypo]}>카메라로 찾기</Text>
        <Image
          style={[styles.camera1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/camera-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.nanumSquareNeo,
    left: "50%",
    position: "absolute",
  },
  childPosition: {
    top: 0,
    backgroundColor: Color.colorTomato,
  },
  iphone1415Position: {
    position: "absolute",
    left: 0,
    right: 0,
  },
  loading12Position: {
    height: 43,
    left: "50%",
    position: "absolute",
  },
  menu1IconPosition: {
    bottom: 8,
    position: "absolute",
  },
  timePosition: {
    height: 54,
    top: "50%",
    width: "35.74%",
    marginTop: -26.75,
    position: "absolute",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition1: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  groupPosition: {
    width: 332,
    marginLeft: -166,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    width: 64,
    marginLeft: -144,
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  qrTypo: {
    fontSize: FontSize.size_9xl,
    top: 30,
    color: Color.miscellaneousTextFieldBG,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.nanumSquareNeo,
    left: "50%",
    position: "absolute",
  },
  text: {
    marginLeft: -101,
    top: 192,
    fontSize: 50,
    fontWeight: "800",
    color: Color.labelsPrimary,
    textAlign: "center",
    fontFamily: FontFamily.nanumSquareNeo,
  },
  iphone1415ProMaxChild: {
    bottom: 818,
    backgroundColor: Color.colorTomato,
    left: 0,
    right: 0,
    position: "absolute",
  },
  iphone1415ProMaxItem: {
    top: 818,
    bottom: 0,
    backgroundColor: Color.colorTomato,
    left: 0,
    right: 0,
  },
  loading12Icon: {
    marginLeft: -53.5,
    width: 115,
    bottom: 0,
  },
  accountPic1: {
    width: 31,
    height: 31,
    right: 0,
  },
  menu1Icon: {
    width: 20,
    height: 26,
    left: 0,
  },
  loading12Parent: {
    marginLeft: -190,
    bottom: 820,
    width: 381,
  },
  text1: {
    marginLeft: -105,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    bottom: 182,
    color: Color.labelsPrimary,
    fontFamily: FontFamily.nanumSquareNeo,
    left: "50%",
    position: "absolute",
  },
  text2: {
    marginLeft: 19,
    textDecorationLine: "underline",
    color: Color.colorRoyalblue_100,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    bottom: 182,
    textAlign: "center",
    fontFamily: FontFamily.nanumSquareNeo,
    left: "50%",
    position: "absolute",
  },
  text3: {
    marginLeft: -36,
    bottom: 158,
    fontSize: FontSize.size_3xs,
    color: Color.colorDimgray_100,
    textAlign: "center",
    fontFamily: FontFamily.nanumSquareNeo,
  },
  time1: {
    top: "33.89%",
    left: "38.26%",
    fontSize: FontSize.headlineRegular_size,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.headlineRegular,
    color: Color.miscellaneousTextFieldBG,
    textAlign: "center",
    position: "absolute",
  },
  time: {
    right: "64.26%",
    left: "0%",
  },
  border: {
    height: "100%",
    marginLeft: -13.65,
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    borderColor: Color.miscellaneousTextFieldBG,
    width: 25,
    opacity: 0.35,
    borderWidth: 1,
    borderStyle: "solid",
    left: "50%",
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12.35,
    top: "36.92%",
    bottom: "31.54%",
    width: 1,
    opacity: 0.4,
  },
  capacity: {
    height: "69.23%",
    marginLeft: -11.65,
    top: "15.38%",
    bottom: "15.38%",
    borderRadius: Border.br_10xs_5,
    width: 21,
    backgroundColor: Color.miscellaneousTextFieldBG,
    left: "50%",
  },
  battery: {
    height: "24.07%",
    marginLeft: 11.15,
    top: "42.59%",
    bottom: "33.33%",
    width: 27,
  },
  wifiIcon: {
    height: "22.78%",
    marginLeft: -13.15,
    top: "43.7%",
    bottom: "33.52%",
    width: 17,
  },
  cellularConnectionIcon: {
    height: "22.59%",
    marginLeft: -39.85,
    top: "43.52%",
    bottom: "33.89%",
    width: 19,
  },
  levels: {
    right: "0%",
    left: "64.26%",
  },
  statusBarIphone: {
    height: 59,
    backgroundColor: Color.colorTomato,
    left: 0,
    right: 0,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_lg,
    bottom: 0,
    backgroundColor: Color.colorTomato,
    top: 0,
  },
  qrcode1Icon: {
    top: 13,
    bottom: 13,
  },
  qr: {
    marginLeft: -53,
  },
  rectangleParent: {
    top: 325,
    bottom: 517,
  },
  rectangleGroup: {
    top: 585,
    bottom: 257,
  },
  text4: {
    marginLeft: -45,
  },
  camera1Icon: {
    top: 14,
    bottom: 12,
  },
  rectangleContainer: {
    top: 455,
    bottom: 387,
  },
  iphone1415ProMax: {
    borderColor: Color.labelsPrimary,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.miscellaneousTextFieldBG,
  },
});

export default IPhone1415ProMax;
