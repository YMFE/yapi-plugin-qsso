import React from 'react';

const qualifyURL = (url, encode) => {
    url = url || '';
    var ret =
        location.protocol +
        '//' +
        location.host +
        (url.substr(0, 1) === '/' ? '' : location.pathname.match(/.*\//)) +
        url;
    if (encode) {
        ret = encodeURIComponent(ret);
    }
    return ret;
};

module.exports = function (options) {
    const handleLogin = (props = {}) => {
        const next = props.state && props.state.next;
        const ext = next ? '&ext=' + encodeURIComponent(URLStringify({ next })) : '';

        const loginURI = '/api/user/login_by_token';
        const { AUTH_SERVER } = options;
        let ret = qualifyURL(loginURI, true);
        let redirectURL = AUTH_SERVER + '?ret=' + ret + ext;
        location.href = redirectURL;
    };

    const QssoComponent = (props = {}) => (
        <button onClick={() => handleLogin(props)} className='btn-home btn-home-normal'>
            QSSO 登录
        </button>
    );

    this.bindHook('third_login', QssoComponent);
};

function URLStringify(o) {
    var ret = [];
    for (var i in o) {
        ret.push(i + '=' + o[i]);
    }
    return ret.join('&');
}
