import { connect } from 'react-redux';

import Cats from '../component/Cats.js';

import { getCats } from '../data/actions/api';
import { setSelectedCat } from '../data/actions/state';

const mapStateToProps = ({ cats, cat }) => ({ cats, cat });

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(getCats()),
        chosenCat: value => dispatch(setSelectedCat(value)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cats);