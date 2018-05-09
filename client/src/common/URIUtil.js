import createHashHistory from 'history/createHashHistory'
import queryString  from 'query-string';

const history = createHashHistory();

const URIUtil = {
  getQuery: function() {
    const search = history.location.search;
    let query = {}
    if(search !== "") {
      query = queryString.parse(search);
    }
    return query;
    // return query;
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
    // history.replace({
    //     pathname: "/",
    //     search
    // });
  },
  clearQuery: function(param) {
    const search = history.location.search;
    let query = {}
    if (query !== '') {
      query = queryString.parse(search);
    }
    // let newQuery = param || 
    // return newQuery;
  //   var t = f.location.search
  //     , n = {};
  //   "" !== t && (n = (0,
  //   c.deepJsonParse)(l.default.parse(t), !0));
  //   var r = param || (0,
  //   a.default)(n, function() {
  //       return ""
  //   });
  //   return d.setQuery(r),
  //   r
  }
}

export default URIUtil;