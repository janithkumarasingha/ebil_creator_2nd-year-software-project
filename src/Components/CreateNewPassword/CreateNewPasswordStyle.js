import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'white',
    alignSelf: 'flex-start',
  },
  paragraph: {
    fontSize: 10,
    // fontWeight: 'bold',
    marginBottom: 20,
    lineHeight: 10,
    color:'white',
    alignSelf: 'flex-start',
  },
  input: {
    width: '50%',
    height: 20,
    // borderColor: '',
    borderWidth: 2,
    borderRadius: 5,
    // paddingHorizontal: 50,
    marginBottom: 10,
    color:'white',
    // marginLeft: ,
    flex: 1,
    fontSize: 16,

  },
  button: {
    backgroundColor: '#FF9900',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  icon: {
    fontSize: 24,
    color: '#aaa',
  },
});