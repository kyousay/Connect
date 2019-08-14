import { connect } from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = ({profile}) => {
    return{
        profile
    }
}

const mapDispatchToProps = ({})

export default connect(mapStateToProps)(Home)