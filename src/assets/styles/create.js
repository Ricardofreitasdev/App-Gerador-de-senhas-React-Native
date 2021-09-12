import { StyleSheet } from 'react-native';


const create = StyleSheet.create({

    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#efefef'
    },
    logo:{
      marginBottom: 30
    },
    title:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#9D9D9D'
    },
    area: {
      marginTop: 15,
      marginBottom: 15,
      backgroundColor: '#fff',
      width: '90%',
      borderRadius: 8,
      padding: 10
    },
    button: {
      backgroundColor: '#16AC2E',
      width: '90%',
      height: 50,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center' ,
      marginTop: '20px'  
    },
    areaText: {
      marginTop: 10,
      padding: 12,
      width: '90%',
      backgroundColor: '#fff',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',

    },
    buttonText:{
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold'  
    },
    textPass: {
      color: '#2cac2d',
      fontSize: 16,
    },
    relative: {
      position: 'relative',     
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    profile: {
      marginBottom: 10,
      fontSize: 15,
      color: '#9D9D9D',
    },
    copy: {
        position: 'absolute',
        right: 0
        
    },
    textCopy: {
        marginTop: 20,
        color: '#9D9D9D'

    },
    input: {
        width: '100%',
        padding: 10,
        textAlign: 'center'
    },
    boxSaveButton: {
      width: '100%'
    },
    textSaveButton: {
      color: '#fff'
    },
    boxSaveButton: {
      width: '100%',
      backgroundColor: '#2cac2d',
      height: 50,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center'    

    }
  
  
})

export default create;