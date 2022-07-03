import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export const HEADERN: ViewStyle = {
  height: 56,
  justifyContent: "center",
  paddingLeft: 10,
  backgroundColor: '#f3f4f5'
}

export const LANGUAGE: TextStyle = {
  color: '#333333',
}

export const LANGUAGEBOX: ViewStyle = {
  height: 32,
  width: 88,
  backgroundColor: '#ffffff',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 5
}

export const MAINBOX: ViewStyle = {
  paddingHorizontal: 20,
  alignItems: 'center'
}

export const vtimes: ImageStyle = {
  width: 120,
  height: 120,
  marginTop: 50
}

export const vtimes2: ImageStyle = {
  width: 113,
  height: 32,
  marginTop: 20
}

export const inputWrap: ViewStyle = {
  backgroundColor: '#f3f4f6',
  borderRadius: 10,
  width: '100%',
  paddingHorizontal: 10,
  marginTop: 20

}
export const inputWrap2: ViewStyle = {
  ...inputWrap,
  marginTop: 8,
}

export const textInput: ViewStyle = {
}

export const button: ViewStyle = {
  backgroundColor: '#1b1c2c',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  height: 48,
  borderRadius: 10,
  marginTop: 30
}

export const buttonIvalid: ViewStyle = {
  ...button,
  backgroundColor: '#ffffff',
  borderWidth: 1,
  borderColor: '#1b1c2c'
}

export const warningBox: ViewStyle = {
  marginVertical: 5,
  width: '100%'
}

export const warningItem: ViewStyle = {
  paddingVertical: 5,
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'flex-start'
}

export const warningText: TextStyle = {
  color: '#ff4b5e',
  fontSize: 13
}

export const warningText2: TextStyle = {
  ...warningText,
  color: '#1c2c3b'
}