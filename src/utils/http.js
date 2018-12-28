import config from "./config";

export function get(url,data){
    return new Promise((reslove,reject)=>{
           wx.request({
               url:config.host+url,
               data:data,
               method:'GET',
               success:(res)=>{
                  if(res.statusCode==200){
                    reslove(res.data);
                  }else{
                    reject(res.data);
                  }
               },
               fail:()=>{
                   reject(res.data)
               }
           })
    })
}

export function post(url,data){
    return new Promise((reslove,reject)=>{
      wx.request({
          url:config.host+url,
          data:data,
          method:"POST",
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success:(res)=>{
             if(res.statusCode ==200){
                 reslove(res.data);
             }else{
                 reject(res.data)
             }
          },
          fail:(res)=>{
               reject(res.data)
          }

      })

    })
}