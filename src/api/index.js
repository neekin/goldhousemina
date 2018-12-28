import { get,post } from "@/utils/http"


export const getAds= ()=>{
     return  get('/ad_imgs.json')
}

export const login=(userInfo)=>{
        return post('/api/member/login',userInfo)
}

// export const getAds = () =>get('/ad_imgs.json',{})