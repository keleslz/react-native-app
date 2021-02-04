import React from 'react'

import { StyleSheet, View, Text, ActivityIndicator } from "react-native";

class FilmDetail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            film : undefined,
            isLoading : true
        }
    }

    _displayLoading() {
        if(this.state.isLoading) {
            return(
                <View style={styles.loadingContainer} >
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1
    },
    loadingContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }
})

export default FilmDetail