import http from "./httpSevices";

export const singupUser=(data)=>{
    return http.post('/user/register' , data)
}