module.exports = class SupList extends Object {
    constructor() {
        super();
    }

    get _listables() {
        return Object.entries(this).filter(el=>{
            // el[0]
        });
    }

    get _entries() {
        return Object.entries(this._list);
    }

    get _values() {
        return Object.values(this._list);
    }

    get _keys() {
        return Object.keys(this._list);
    }

    _clear() {
        this._list = {};
    }
}