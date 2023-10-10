// WARNING: Since this is running within the NGINX environment, there is not acces to some more modern Javascript functionalities.
// To learn more read: https://www.nginx.com/blog/harnessing-power-convenience-of-javascript-for-each-request-with-nginx-javascript-module
// Or read the documentation: https://nginx.org/en/docs/njs/

const preliminaryValidate = (r) => {
  const headers = r.headersIn
  if (!headers.Authorization) {
    // If there is no Authorization header, reject the request
    return r.return(401);
  } else {
    try {
      const token = headers.Authorization.split(' ')[1];

      if (!token) {
        return r.return(401);
      };
      // Do any processing of the token here
      const tokenCondition = true;
      if (!tokenCondition) {
        return r.return(401);
      } else {
        return r.return(204);
      }

    } catch (e) {
      // If this failed for any reseason, log the error to the error log
      r.log(e);
      // If this failed for any reseason, reject the request
      return r.return(401);
    }
  };
};

export default {preliminaryValidate};