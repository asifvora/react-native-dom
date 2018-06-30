import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, ScrollView, TouchableOpacity, Dimensions, ListView } from 'react-native';
import Row from './Row';
const BASE_URL = `https://movie-demo-api.now.sh/3/movie/popular?page=`;
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            moviesData: [],
            moviesDataStatus: false,
            page: 1,
            totalPages: null,
            isLoading: true,
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
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
        let { page } = this.state;
        let apiMoviesUrl = `${BASE_URL}${page}`;
        fetch(apiMoviesUrl)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    isLoading: false,
                    moviesDataStatus: true,
                    moviesData: response.results,
                    page: response.page + 1,
                    totalPages: response.total_pages,
                    dataSource: ds.cloneWithRows(response.results)
                });
            }).catch(err => {
                this.setState({ moviesDataStatus: false, isLoading: false })
            });
    }

    handleScroll = (e) => {
        let { page, totalPages, moviesData } = this.state;
        if (page <= totalPages) {
            let apiMoviesUrl = `${BASE_URL}${page}`;
            fetch(apiMoviesUrl)
                .then(response => response.json())
                .then(response => {
                    this.setState({
                        isLoading: false,
                        moviesData: [...moviesData, ...response.results],
                        page: response.page + 1,
                        totalPages: response.total_pages,
                        dataSource: ds.cloneWithRows([...moviesData, ...response.results])
                    });
                }).catch(err => {
                    this.setState({ isLoading: false })
                });
        }
    }

    listData(data) {
        return (
            <Row data={data} navigation={this.props.navigation.navigate} />
        );
    }


    render() {
        //hide yellow warnings...
        console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
        console.disableYellowBox = true;

        if (this.state.isLoading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator animating size="large" />
                </View>
            )
        } else {
            return (
                <ScrollView onScroll={this.handleScroll} scrollEnabled={true} contentContainerStyle={{ flex: 1 }}>
                    <ListView
                        style={{
                            flex: 1,
                        }}
                        dataSource={this.state.dataSource}
                        renderRow={(data) => this.listData(data)}
                        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                        renderHeader={() => null}
                        renderFooter={() => null}
                    />
                </ScrollView>
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
        // padding: 20
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
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    }
});