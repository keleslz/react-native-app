import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Search from "../Component/Search";
import FilmDetail from '../Component/FilmDetail'; 

const SearchStackNavigator = createStackNavigator({
    Search: { // Nom de vue "Search"
        screen: Search,
        navigationOptions: {
            title: 'Rechercher'
        }
    },
    FilmDetail: { // Nom de vue "FilmDetail"
        screen: FilmDetail,
        // navigationOptions: {
        //     title: 'Détail'
        // }
    }   
})

export default createAppContainer(SearchStackNavigator);