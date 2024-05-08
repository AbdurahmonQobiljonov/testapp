import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    position: 'absolute',
  },
  content: {
    zIndex: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 15,
    backgroundColor: '#eee',
    fontSize: 18,
    color: 'black',
  },
  inputs: {
    width: '100%',
    rowGap: 20,
    marginVertical: 20,
    justifyContent: 'space-around',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#050A30',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 1.4,
  },
});

export default styles;
