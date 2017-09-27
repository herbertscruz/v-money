import {format} from './utils'
import assign from './assign'
import defaults from './options'

export default function(val, opt = defaults) {
    return format(val, assign(defaults, opt));
};