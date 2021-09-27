import './MainPage.scss'
import NavigationBar from "../../components/NavigationBar"
import MainPageHeader from './MainPageHeader'
import MainPageBody from './MainPageBody'

function MainPage(){
    return(
        <>
            <NavigationBar></NavigationBar>
            <MainPageHeader></MainPageHeader>
            <MainPageBody></MainPageBody>
        </>
    );
}

export default MainPage;