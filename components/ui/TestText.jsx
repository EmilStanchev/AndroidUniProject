import { Text, StyleSheet } from "react-native";

const TestText = ({
  text,
  family,
  size,
  color,
  align,
  isMaxWidth,
  onOneRow,
}) => {
  const textStyle = {
    fontFamily: family,
    fontSize: size,
    color: color,
    textAlign: align,
    maxWidth: isMaxWidth ? 200 : "100%",
  };

  return (
    <Text numberOfLines={onOneRow ? 1 : null} style={textStyle}>
      {text}
    </Text>
  );
};

export default TestText;
