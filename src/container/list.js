import { connect } from 'react-redux';

import Cats from '../component/Cats.js';

import { getCats } from '../data/actions/api';
import { setSelectedCat } from '../data/actions/state';

const mapStateToProps = ({ cats, cat }) => ({ cats, cat });

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(getCats()),
        chosenCat: clickedCat => dispatch(setSelectedCat(clickedCat)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cats);