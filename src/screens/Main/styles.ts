import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menu: {
    width: 35,
    height: 35,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  title: {
    marginVertical: 25,
    fontSize: 20,
    fontWeight: '500',
  },
  list: {},
  addCart: {
    backgroundColor: 'black',
    width: '35%',
    marginBottom: 20,
    paddingHorizontal: 5,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 8,
  },
  addButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  actionSheet: {
    paddingHorizontal: 20,
    paddingTop: 35,
    rowGap: 10,
  },
  input: {
    borderRadius: 8,
    paddingVertical: 15,
    backgroundColor: '#eee',
    paddingHorizontal: 15,
    fontSize: 18,
    color: 'black',
  },
  actionRow: {
    rowGap: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 50,
  },
});

export default styles;
