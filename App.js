import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  getTheme,
} from 'react-native-material-kit';

const theme = getTheme();



export default function App() {
  return (
    <View style={theme.cardStyle}>
      <Image source={{uri : base64Icon}} style={theme.cardImageStyle} />
      <Text style={theme.cardTitleStyle}>Welcome</Text>
      <Text style={theme.cardContentStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
      </Text>
      <View style={theme.cardMenuStyle}>{menu}</View>
      <Text style={theme.cardActionStyle}>My Action</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
