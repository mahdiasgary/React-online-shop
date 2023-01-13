import http from "./httpSevices"

export const loginUser=(data)=>{
  return  http.post("/user/login " , data)
}