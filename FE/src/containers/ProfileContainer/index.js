import { connect } from 'react-redux';
import Profile from './components/Profile';
import { getProfile, updateUserStatus } from './meta/actions';
import { selectUser, selectOrders, selectStatus } from './meta/selectors';

const mapStateToProps = (state) => ({
  user: selectUser(state),
  orders: selectOrders(state),
  status: selectStatus(state),
});

const mapDispatchToProps = {
  getProfile,
  updateUserStatus,
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
