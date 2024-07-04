import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

export type StatePlaceholderType = {
  searchText?: string;
  showText?: boolean;

  /** Style props */
  statePlaceholderPosition?: string;
  statePlaceholderBackgroundColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatePlaceholder = ({
  searchText = "Search",
  showText = true,
  statePlaceholderPosition,
  statePlaceholderBackgroundColor,
}: StatePlaceholderType) => {
  const statePlaceholderStyle = useMemo(() => {
    return {
      ...getStyleValue("position", statePlaceholderPosition),
      ...getStyleValue("backgroundColor", statePlaceholderBackgroundColor),
    };
  }, [statePlaceholderPosition, statePlaceholderBackgroundColor]);

  return (
    <View style={[styles.stateplaceholder, statePlaceholderStyle]}>
      <Text style={[styles.searchGlyph, styles.searchGlyphTypo]}>􀊫</Text>
      {showText && (
        <Text
          style={[styles.placeholderLabel, styles.searchGlyphTypo]}
          numberOfLines={1}
        >
          {searchText}
        </Text>
      )}
      <Text style={styles.dictation}>􀊱</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchGlyphTypo: {
    textAlign: "left",
    color: Color.labelsSecondary1,
    fontFamily: FontFamily.bodyRegular,
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
  },
  searchGlyph: {
    width: 25,
  },
  placeholderLabel: {
    flex: 1,
    letterSpacing: 0,
    overflow: "hidden",
    height: 22,
  },
  dictation: {
    textAlign: "center",
    color: Color.labelsSecondary1,
    fontFamily: FontFamily.bodyRegular,
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
  },
  stateplaceholder: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.fillsTertiary1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_6xs,
    alignSelf: "stretch",
  },
});

export default StatePlaceholder;
