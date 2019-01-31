import { connect } from 'react-redux';

import CatDetail from '../component/CatDetail';


const mapStateToProps = ({ DisplayCat }) => ({ DisplayCat });


export default connect(mapStateToProps)(CatDetail);