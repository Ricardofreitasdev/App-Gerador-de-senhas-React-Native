import { StyleSheet } from 'react-native';

const home = StyleSheet.create({

    wrapper: {
        display: "flex",
        padding: 20,
        backgroundColor: '#efefef',
  
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    },
    box: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 5,
        borderRadius: 8
    },
    boxTitle: {
        fontWeight: 'bold'
    }
})

export default home;