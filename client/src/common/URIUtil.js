import queryString  from 'query-string';

const URIUtil = {
  getQuery: function() {
    const search = window.history.search;
    let query = {}
    if(search !== "") {
      query = queryString.parse(search);
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

    // var t = queryString.stringify(param);
    // window.history.replace({
    //     pathname: "/",
    //     search
    // });
  },
  clearQuery: function(e) {
  //   var t = f.location.search
  //     , n = {};
  //   "" !== t && (n = (0,
  //   c.deepJsonParse)(l.default.parse(t), !0));
  //   var r = e || (0,
  //   a.default)(n, function() {
  //       return ""
  //   });
  //   return d.setQuery(r),
  //   r
  }
}

export default URIUtil;