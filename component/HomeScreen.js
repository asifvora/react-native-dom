import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            moviesData: [],
            moviesDataStatus: false,
            isLoading: true,
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Movies',
            headerTitleStyle: { width: '100%', textAlign: 'center' },
            // headerStyle: { backgroundColor: 'red' },
            headerLeft: (null),
            // headerTintColor: 'pink',
            drawerLockMode: 'locked-closed',
        };
    };

    componentDidMount() {
        var apiMoviesUrl = `https://movie-demo-api.now.sh/3/movie/popular?api_key=06ad8c969c78fee0a022ad991fb6f9c5&page=1`;
        fetch(apiMoviesUrl)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    isLoading: false, moviesDataStatus: true, moviesData: response.results,
                });
            }).catch(err => {
                this.setState({ moviesDataStatus: false, isLoading: false })
            });
    }

    detailScreen(Details) {
        this.props.navigation.navigate('About', { Details: Details });
        console.log('Details', Details)
    }

    movies() {
        let { moviesDataStatus, moviesData } = this.state;

        return moviesDataStatus === true ? moviesData.map((data, key) => {
            return (
                <TouchableOpacity style={styles.card} key={key} onPress={() => this.detailScreen(data)}>
                    <View>
                        <View style={styles.imageView}>
                            <Image
                                style={styles.image}
                                resizeMode='contain'
                                source={{ uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}` }}
                            />
                        </View>
                        <View style={styles.nameView}>
                            <Text style={styles.nameText}>
                                {data.original_title}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }) : <View><Text>No record found.</Text></View >;

    }

    render() {
        //hide yellow warnings...
        console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
        console.disableYellowBox = true;
        let movies = this.movies();
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
                            {movies}
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
        marginTop: 5
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
        fontSize: 16,
        marginLeft: 10,
        marginTop: 5
    },
});