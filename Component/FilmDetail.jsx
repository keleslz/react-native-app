import React from 'react'
import { StyleSheet, View, Text, Image, ActivityIndicator } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';

import { getImageFromApi, getDetailFilmFromApi , addSlashToList, formatDate } from '../Api/TMDBAPI';

import numeral from 'numeral'

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

    componentDidMount() {
        console.log()
        getDetailFilmFromApi(this.props.navigation.getParam('idFilm')).then(data => {
            this.setState({
                film: data,
                isLoading: false
            })
        })
    }

    _dispayFilm() {

        if(this.state.film !== undefined ) {
            const film = this.state.film
            return (
                <ScrollView style={styles.scrollviewContainer}>
                    <Image 
                        style={film.poster_path !== null ? styles.image : [styles.image, {backgroundColor:'gray'}]}
                        source={{uri: getImageFromApi(film.poster_path)}}
                    />

                    <View style={styles.textContainer}>
                        <Text style={styles.title} >{film.title}</Text>
                        <Text style={styles.description} >{film.overview.length > 0 ? film.overview : 'Aucune desciption..'}</Text>
                        <View>
                            <Text style={styles.littleTextBold}>Sorti le : {formatDate(film.release_date)}</Text>
                            <Text style={styles.littleTextBold}>Note : {film.vote_average}</Text>
                            <Text style={styles.littleTextBold}>Nombre de votes : {film.vote_count}</Text>
                            <Text style={styles.littleTextBold}>Budget : {numeral(film.budget).format('0,0[.]00 $')}</Text>
                            <Text style={styles.littleTextBold}>Genre(s) : {addSlashToList(film.genres)}</Text>
                            <Text style={styles.littleTextBold}>Companie(s) : {addSlashToList(film.production_companies)}</Text>
                        </View>
                    </View>
                </ScrollView>
            )
        }
    }

    render() {

        return (
            <View style={styles.mainContainer}>
                {this._displayLoading()}
                {this._dispayFilm()}
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
    },
    scrollviewContainer : {
       flex: 1 ,
        paddingTop:20
    },
    image : {
        flex:1,
        width : '95%',
        height: 200,
        alignSelf: 'center',
        resizeMode: 'cover',
    },
    title : {
        fontSize: 30,
        fontWeight : "700",
        textAlign: 'center',
        marginVertical : 20
    }, 
    textContainer : {
        margin : '2.5%',
        width : '95%',
        paddingBottom: 50
    },
    description : {
        margin : 0,
        marginBottom: 50
    },
    littleTextBold : {
        fontWeight : '600'
    }
})

export default FilmDetail