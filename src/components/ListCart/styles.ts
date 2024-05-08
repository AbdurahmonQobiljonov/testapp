import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cart: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 20,
  },
  name: {
    fontSize: 17,
    fontWeight: '500',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  cartImage: {
    width: 50,
    height: 50,
    marginLeft: 8,
    marginVertical: 8,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
  rightIcon: {
    marginRight: 15,
  },
});

export default styles;
