import createHashHistory from 'history/createHashHistory'
import queryString  from 'query-string';
import mapValues from 'lodash/mapValues';
import jsonUtil from './jsonUtil';


const history = createHashHistory();

const URIUtil = {
  getQuery: function() {
    const search = history.location.search;
    let query = {}
    if(search !== "") {
      query = jsonUtil.deepJsonParse(queryString.parse(search), true);
    }
    return query;
    // var e = f.location.search
    //   , t = {};
    // return "" !== e && (t = (0,
    // c.deepJsonParse)(l.default.parse(e), !0)),
    // t
  },
  setQuery: function(param) {
    const search = queryString.stringify(param);
    history.replace({
      pathname: "/",
      search
    });

    // var t = queryString.stringify(param);
<<<<<<< HEAD
    // window.history.replace({
=======
    // history.replace({
>>>>>>> ee80772b53ec717e29785d502a793f94729156a3
    //     pathname: "/",
    //     search
    // });
  },
  clearQuery: function(param) {
    const search = history.location.search;
    let query = {}
    if(search !== "") {
      query = jsonUtil.deepJsonParse(queryString.parse(search), true);
    }
    let newQuery = param || mapValues(query, () => {
      return ""
    })
    this.setQuery(newQuery)
    return newQuery;
    
    // var t = f.location.search
    //   , n = {};
    // "" !== t && (n = (0,
    // c.deepJsonParse)(l.default.parse(t), !0));
    // var r = e || (0,
    // a.default)(n, function() {
    //     return ""
    // });
    // return d.setQuery(r),
    // r
  }
}

export default URIUtil;