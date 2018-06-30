import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, ScrollView } from 'react-native';

export default class AboutScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            details: {},
            isLoading: true,
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Details',
            headerTitleStyle: { width: '100%', textAlign: 'center' },
            // headerStyle: { backgroundColor: 'red' },
            // headerLeft: (null),
            // headerTintColor: 'pink',
            drawerLockMode: 'locked-closed',
        };
    };

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator animating size="large" />
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <ScrollView>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            <Text style={styles.nameText}>
                                ASIF
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 20
    },
    card: {
        borderWidth: 1,
        borderColor: '#8F8F8F',
        backgroundColor: 'white',
        width: '15%',
        marginLeft: 25,
        marginBottom: 20,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        height: 280,
        borderRadius: 5,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    imageView: {
        flexDirection: 'row',
    },
    image: {
        flex: 1,
        width: null,
        height: 210,
        overflow: 'hidden',
        marginTop: 10,
        marginBottom: 10
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: "#CED0CE"
    },
    nameView: {
        flex: 1,
        borderTopWidth: 1,
        borderColor: '#8F8F8F',
    },
    nameText: {
        color: '#8F8F8F',
        fontSize: 20,
        marginLeft: 10,
        marginTop: 5
    },
});