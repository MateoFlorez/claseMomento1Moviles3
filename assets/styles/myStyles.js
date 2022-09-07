import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0C00FF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    relleno: {
      fontSize: 30,
      fontWeight: '800',
      color: '#333',
    },
    nombre: {
      fontSize: 20,
      color: '#333',
      fontWeight: '900'
    },
    dev: {
      fontSize: 15,
      color: '#fff',
      fontWeight: '700'
    },
    alignViews: {
      alignItems: 'center',
      justifyContent: 'center'
    }
});

const viewsChild = StyleSheet.create({
    views: {
        width: '80%',
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 6,
    }
})

export {styles,viewsChild}