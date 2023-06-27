import theme from "@themes/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
  },
  form: {
    width: '80%',
  },
  text: {
    color: 'white',
    fontSize: 15
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: 'black',
    marginBottom: 8,
  },
});

export default styles;