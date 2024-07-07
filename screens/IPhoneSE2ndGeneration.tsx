import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";
import { useFonts } from "expo-font";

const IPhoneSE2ndGeneration = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <>
      <View style={styles.iphoneSe2ndGeneration}>
        <View style={styles.header} />
        <Pressable
          onPress={() => {
            navigation.navigate("IPhoneSE2ndGeneration");
          }}
        >
          <Image
            style={styles.loadingIcon}
            contentFit="cover"
            source={require("../assets/loading1-2.png")}
          />
        </Pressable>
        <Text style={styles.title}>빠른 찾기</Text>
        <Image
          style={styles.accountPic}
          contentFit="cover"
          source={require("../assets/account-pic-1.png")}
        />
        <Image
          style={styles.menuIcon}
          contentFit="cover"
          source={require("../assets/menu-1.png")}
        />
        <Pressable
          onPress={() => {
            navigation.navigate("IPhoneSE2ndGenerationAI");
          }}
        >
          <Image
            style={styles.aiIcon}
            contentFit="cover"
            source={require("../assets/ai--1.png")}
          />
        </Pressable>
        <Image
          style={styles.mainIcon}
          contentFit="cover"
          source={require("../assets/--1.png")}
        />
        <Pressable
          onPress={() => {
            navigation.navigate("IPhoneSE2ndGeneration2");
          }}
        >
          <Image
            style={styles.qrIcon}
            contentFit="cover"
            source={require("../assets/qr--1.png")}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("IPhoneSE2ndGeneration2");
          }}
        >
          <Image
            style={styles.secondaryIcon}
            contentFit="cover"
            source={require("../assets/--11.png")}
          />
        </Pressable>
        <Text style={styles.namePrompt}>이름을 알고있다면?</Text>
        <Text style={styles.directSearch}>직접 검색하기</Text>
        <Text style={styles.userMode}>일반 사용자 모드</Text>
        <Pressable
          onPress={() => {
            navigation.navigate("IPhoneSE2ndGeneration3");
          }}
        >
          <Text>3</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("IPhoneSE2ndGeneration4");
          }}
        >
          <Text>4</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("IPhoneSE2ndGeneration5");
          }}
        >
          <Text>5</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("IPhoneSE2ndGeneration6");
          }}
        >
          <Text>6</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("IPhoneSE2ndGenerationAI");
          }}
        >
          <Text>AI</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
  header: {
    backgroundColor: Color.colorTomato,
    height: 67,
    width: "100%",
    position: "absolute",
    top: 0,
  },
  loadingIcon: {
    width: 115,
    height: 43,
    position: "absolute",
    top: 20,
    left: "51%",
    transform: [{ translateX: -57.5 }],
  },
  title: {
    top: 124,
    left: 103,
    fontSize: FontSize.size_23xl,
    fontWeight: "800",
    color: Color.labelsPrimary,
    textAlign: "center",
    fontFamily: FontFamily.nanumSquareNeo,
    position: "absolute",
  },
  accountPic: {
    top: 26,
    left: 320,
    width: 31,
    height: 31,
    position: "absolute",
  },
  menuIcon: {
    top: 28,
    left: 25,
    height: 26,
    width: 20,
    position: "absolute",
  },
  aiIcon: {
    height: 130,
    width: 130,
    position: "absolute",
    top: 395,
    left: 206,
  },
  mainIcon: {
    height: 130,
    width: 130,
    position: "absolute",
    top: 395,
    left: 40,
  },
  qrIcon: {
    height: 130,
    width: 130,
    position: "absolute",
    top: 231,
    left: 40,
  },
  secondaryIcon: {
    height: 130,
    width: 130,
    position: "absolute",
    top: 231,
    left: 206,
  },
  namePrompt: {
    left: 83,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    top: 572,
    color: Color.labelsPrimary,
    fontFamily: FontFamily.nanumSquareNeo,
    position: "absolute",
  },
  directSearch: {
    left: 207,
    // textDecoration: "underline",
    fontWeight: "700",
    color: Color.colorRoyalblue_100,
    fontSize: FontSize.size_sm,
    top: 572,
    textAlign: "center",
    fontFamily: FontFamily.nanumSquareNeo,
    position: "absolute",
  },
  userMode: {
    top: 600,
    left: 152,
    fontSize: FontSize.size_3xs,
    color: Color.colorDimgray_100,
    textAlign: "center",
    fontFamily: FontFamily.nanumSquareNeo,
    position: "absolute",
  },
});

export default IPhoneSE2ndGeneration;
