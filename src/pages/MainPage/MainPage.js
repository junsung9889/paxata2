import './MainPage.css'
import NavigationBar from "../../components/NavigationBar"
import MainPageHeader from './MainPageHeader'
import MainPageBody from './MainPageBody'

function MainPage(){
    return(
        <div className = 'mainPage'>
            <NavigationBar></NavigationBar>
            <MainPageHeader></MainPageHeader>
            <MainPageBody></MainPageBody>
        </div>
    );
}

export default MainPage;