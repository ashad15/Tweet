//API1
//Worker to get request from api2 which is send through request in form using POST,
//which is received at server.js file and transferred to this worker for process and returning the response

exports.ReceiveTweet = (params) => {
      let username = params.username;
      let twit = params.twit;
      let createdAt = params.createdAt;
      let retweetCount = params.retweetCount;
      let userDetail = params.userDetail;

      return new Promise((resolve,reject)=>{

          /*apply your method to process to get tweet from server and
          and combine them into a data structure i.e json or array or any suitable
          then send it back to server.js through resolve.
          Catch error while loading data from tweets using there api as they define their function for geting tweets
          */






          resolve({
            "success":true,
            "tweets": "/*data structure here */"
          });


      }).catch((err)=>{
          console.log(err);
        });
}
