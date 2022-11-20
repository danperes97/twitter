import MainContainer from '../features/tweetsList/TweetsList';
import NavBar from '../features/navbar/NavBar';
import NewsBar from '../features/newsBar/NewsBar';
import './Layout.css';

const Layout = ({children}) => {
  return(
     <div className="home-layout">
      {children}
    </div>
  )
};

export default Layout;