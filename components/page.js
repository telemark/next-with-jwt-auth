import compose from '../lib/compose'
import session from './session'
import layout from './layout'

export default compose(session, layout)
