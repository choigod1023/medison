import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  Alert, // Import Alert for triggering an event
} from "react-native";
import { Image } from "expo-image";
import StatePlaceholder from "../components/StatePlaceholder";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";

interface Message {
  text: string;
  type: "sent" | "received";
}

const IPhoneSE2ndGenerationAI = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = { text: message, type: "sent" };
      setMessages([...messages, newMessage]);
      setMessage("");

      // Check if the sent message contains the word "타이레놀"
      if (message.includes("타이레놀")) {
        // Trigger an event - here we'll use an alert for demonstration
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: "타이레놀을 찾으시군요. 설명 페이지로 안내 해드리겠습니다.",
              type: "received",
            },
          ]);
        }, 1000);
        setTimeout(() => {
          navigation.navigate("IPhoneSE2ndGeneration5");
        }, 3000);
      } else if (
        message.includes("쇼핑") ||
        message.includes("구매") ||
        message.includes("사고")
      ) {
        // Trigger an event - here we'll use an alert for demonstration
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: "약 구매 페이지로 안내 해드리겠습니다.",
              type: "received",
            },
          ]);
        }, 1000);
        setTimeout(() => {
          navigation.navigate("IPhoneSE2ndGeneration6");
        }, 3000);
      } else if (message.includes("처방") || message.includes("오늘")) {
        // Trigger an event - here we'll use an alert for demonstration
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: "오늘 먹을 약을 안내 해드리겠습니다.",
              type: "received",
            },
          ]);
        }, 1000);
        setTimeout(() => {
          navigation.navigate("IPhoneSE2ndGeneration4");
        }, 3000);
      } else {
        // Simulate a reply after a short delay

        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: "자동 응답 메시지입니다.", type: "received" },
          ]);
        }, 1000);
      }
    }
  };

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
        <ScrollView style={styles.messagesContainer}>
          {messages.map((msg, index) => (
            <View
              key={index}
              style={[
                styles.messageBubble,
                msg.type === "sent"
                  ? styles.sentMessage
                  : styles.receivedMessage,
              ]}
            >
              <Text style={styles.messageText}>{msg.text}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.bottomInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="검색하실 약에 대한 설명을 적어주세요."
            placeholderTextColor={Color.colorGray_300}
            value={message}
            onChangeText={setMessage}
          />
          <Pressable style={styles.sendButton} onPress={handleSendMessage}>
            <Text style={styles.sendButtonText}>↵</Text>
          </Pressable>
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
  messagesContainer: {
    flex: 1,
    padding: 10,
    top: 100,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    maxWidth: "80%",
    alignSelf: "flex-start",
  },
  sentMessage: {
    backgroundColor: Color.colorsBlue1,
    alignSelf: "flex-end",
  },
  receivedMessage: {
    backgroundColor: Color.colorGray_100,
    alignSelf: "flex-start",
  },
  messageText: {
    color: Color.miscellaneousTextFieldBG,
    fontSize: FontSize.bodyRegular_size,
    fontFamily: "SFProText",
  },
  bottomInputContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    flexDirection: "row",
    backgroundColor: Color.colorGray_300,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: Color.miscellaneousBarBorder,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: Color.miscellaneousBarBorder,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: Color.colorGray_100,
    color: Color.miscellaneousTextFieldBG,
  },
  sendButton: {
    backgroundColor: Color.colorsBlue1,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonText: {
    color: Color.colorGray_100,
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.sFProText,
    fontWeight: "600",
  },
  iphoneSe2ndGenerationAi: {
    backgroundColor: Color.colorDarkslategray_100,
    flex: 1,
    height: 667,
    width: "100%",
  },
});

export default IPhoneSE2ndGenerationAI;
