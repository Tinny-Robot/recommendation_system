import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Search from '../components/Search';
import CategoriesFilter from '../components/CategoryFilter';
import RecipeCard from '../components/RecipeCard';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16,  marginTop: 45}}>
        <Header headerText={"hiii, Tolu"} headerIcon={"wechat"}  ></Header>
        <Search icon="search" Placeholder={"Enter your favourite meal"}></Search>
        
        <View style={{ marginTop: 22, flex: 1}}>
            <Text style={{fontSize: 22, fontWeight: "bold"}}>Categories</Text>
        </View>
        <CategoriesFilter></CategoriesFilter>

        <View style={{ marginTop: 22, }}>
            <Text style={{fontSize: 22, fontWeight: "bold"}}>Recipes</Text>
            <RecipeCard></RecipeCard>
        </View>
   </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});