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
    alignItems: 'center',
    columnGap: 8,
  },
  mainBlock: {
    flex: 1,
  },
  headerRow: {
    rowGap: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  avatar: {
    width: '100%',
    height: 450,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
  },
  descr: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default styles;
