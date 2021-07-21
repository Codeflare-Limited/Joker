import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
    },
    textCon: {
        flex: 1,
        left:9,
        margin:18,
        bottom:163,
        position:'absolute'
    },
    startButtonCon: {
        flex: 1,
        right:9,
        margin:18,
        bottom:45,
        position:'absolute'
    },
    startButton: {
        width:145, 
        borderRadius: 9,
        backgroundColor: '#800000'
    },
    leadText: {
        width: 225,
        fontSize: 54,
        fontWeight: 'bold',
        color: '#fff'
    },
    jokesTitle: {
        fontSize: 20,
        textAlign: 'center',
        position: 'relative',
        top: 18
    },
    cardContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '90%',
        height: 120,
        borderRadius: 9,
        shadowColor: "#000",
        marginBottom: 18,
        shadowOffset: {
            width: 0,
            height: 0,
        },
       shadowOpacity: 0.5,
       shadowRadius: 12,
       padding: 6
    },
    cardText: {
        color: '#fff',
        fontSize: 16
    },
    punchLine: {
        color: '#ffef00',
        fontSize: 16,
        marginTop: 6,
        fontWeight: 'bold'
    }
})

export { styles }