import type { ParamMatcher } from '@sveltejs/kit'

/**
 * Integer parameter match, attempts to match a
 * number as a dynamic route.
 * @example ```app/id/1``` <- checks if this is an integer
 *
 */

export const match: ParamMatcher = (param) => {
	return !isNaN(parseInt(param))
}
