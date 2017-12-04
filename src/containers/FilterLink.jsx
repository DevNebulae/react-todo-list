import Link from "../components/Link"
import { connect } from "react-redux"
import { setVisibilityFilter } from "../actions/index"
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)

export default FilterLink
