const qs = require('querystring')

function assignQuery (location, newQuery) {
    const {search} = location
    if (!search) throw new Error ('location need search property')
    const query = qs.parse(search.slice(1))
    return qs.stringify(Object.assign(query, newQuery))
}

module.exports = {
    assignQuery
}
