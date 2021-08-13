import './App.css';
import HomePage from './HomePage/HomePage.js';
import HomePageLogged from './HomePageLogged/HomePageLogged';
import HomePageAdminPanel from './HomePageAdminPanel/HomePageAdminPanel';
import Category from './Category/Category.js';
import CategoryLogged from './CategoryLogged/CategoryLogged';
import SiteBook from './SiteBook/SiteBook.js';
import SiteBookLogged from './SiteBookLogged/SiteBookLogged';
import TopLogged from './TopLogged/TopLogged.js';
import Register from './Register/Register';
import RegisterDone from './Register/RegisterDone';
import ChangeAccountInformations from './ChangeAccountInformations/ChangeAccountInformations';
import MyOrders from './MyOrders/MyOrders';
import CollectionOrders from './CollectionOrders/CollectionOrders';
import AddAuction from './AddAuction/AddAuction';
import ApplicationNewBookToDataBase from './ApplicationNewBookToDataBase/ApplicationNewBookToDataBase';
import EditAuction from './EditAuction/EditAuction';
import BookEdit from './BookEdit/BookEdit';
import AddNewBook from './AddNewBook/AddNewBook';
import AddNewBookGoogle from './AddNewBookGoogle/AddNewBookGoogle';
import AddNewBookManual from './AddNewBookManual/AddNewBookManual';
import Auctions from './Auctions/Auctions';
import EditAuctionAdmin from './EditAuctionAdmin/EditAuctionAdmin';
import Questions from './Questions/Questions';
import Question from './Question/Question';
import QuestionSearch from './QuestionSearch/QuestionSearch';
import Users from './Users/Users';
import ChangeUserInformationAdmin from './ChangeUserInformationAdmin/ChangeUserInformationAdmin';
import SiteBookOther from './SiteBookOther/SiteBookOther';
import SiteBookOtherLogged from './SiteBookOtherLogged/SiteBookOtherLogged';
import Logout  from './Logout/Logout';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
  return (
      <div>
          <Router>
              <Switch>
                  <Route exact path={'/'} component={HomePage}/>
                  <Route exact path={'/Category'} component={Category}/>
                  <Route exact path={'/CategoryLogged'} component={CategoryLogged}/>
                  <Route exact path={'/SiteBook'} component={SiteBook}/>
                  <Route exact path={'/SiteBookLogged'} component={SiteBookLogged}/>
                  <Route exact path={'/TopLogged'} component={TopLogged}/>
                  <Route exact path={'/HomePageLogged'} component={HomePageLogged}/>
                  <Route exact path={'/HomePageAdminPanel'} component={HomePageAdminPanel}/>
                  <Route exact path={'/Register'} component={Register}/>
                  <Route exact path={'/RegisterDone'} component={RegisterDone}/>
                  <Route exact path={'/ChangeAccountInformations'} component={ChangeAccountInformations}/>
                  <Route exact path={'/MyOrders'} component={MyOrders}/>
                  <Route exact path={'/CollectionOrders'} component={CollectionOrders}/>
                  <Route exact path={'/AddAuction'} component={AddAuction}/>
                  <Route exact path={'/ApplicationNewBookToDataBase'} component={ApplicationNewBookToDataBase}/>
                  <Route exact path={'/EditAuction'} component={EditAuction}/>
                  <Route exact path={'/BookEdit'} component={BookEdit}/>
                  <Route exact path={'/AddNewBook'} component={AddNewBook}/>
                  <Route exact path={'/AddNewBookGoogle'} component={AddNewBookGoogle}/>
                  <Route exact path={'/AddNewBookManual'} component={AddNewBookManual}/>
                  <Route exact path={'/Auctions'} component={Auctions}/>
                  <Route exact path={'/EditAuctionAdmin'} component={EditAuctionAdmin}/>
                  <Route exact path={'/Questions'} component={Questions}/>
                  <Route exact path={'/Question'} component={Question}/>
                  <Route exact path={'/QuestionSearch'} component={QuestionSearch}/>
                  <Route exact path={'/Users'} component={Users}/>
                  <Route exact path={'/ChangeUserInformationAdmin'} component={ChangeUserInformationAdmin}/>
                  <Route exact path={'/SiteBookOther'} component={SiteBookOther}/>
                  <Route exact path={'/SiteBookOtherLogged'} component={SiteBookOtherLogged}/>
                  <Route exact path={'/Logout'} component={Logout}/>
              </Switch>
          </Router>
      </div>
  )
}

export default App;
