import { connect } from 'react-redux';

import Cats from '../component/Cats.js';

import { getCats } from '../data/actions/api';

const mapStateToProps = ({ cats }) => ({ cats });

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(getCats()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cats);