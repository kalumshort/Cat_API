import { connect } from 'react-redux';

import CatDetail from '../component/CatDetail';



const mapStateToProps = ({ cat }) => ({ cat });


export default connect(mapStateToProps)(CatDetail);