import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBox: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  headerText: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  linkText: {
    color: '#42A5F5',
    borderBottomWidth: 1,
    borderColor: '#42A5F5',
  },
});

export default styles;
