import { router } from 'expo-router';
import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native';



const LogExpenses = () => {


const handleOpenModalWithRefreshControl = () => {
    router.navigate("/logs/ModalWithRefreshControl")
}

const handleOpenModalWithoutRefreshControl = () => {
    router.navigate("/logs/ModalWithoutRefreshControl")
}
    return(
        <View style={styles.container}>
            <Button title="CLICK ME -> Open Modal WITH refresh control" onPress={handleOpenModalWithRefreshControl}>
                
            </Button>

            <Button title="  CLICK ME ->Open Modal WITHOUT refresh control" onPress={handleOpenModalWithoutRefreshControl}>
                
            </Button>
            
        </View>
    )

}



const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "white"
    }
})

export default LogExpenses;