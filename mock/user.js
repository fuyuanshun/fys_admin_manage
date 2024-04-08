function createUserList(){
    return [
        {
            userId:1,
            avatar:'',
            username:'fysfys',
            password:'fysfys',
            desc:'管理员',
            roles:['管理员'],
            buttons:['cuser.detail'],
            routes:['home'],
            token:'Admin_Token',
        },
        {
            userId:2,
            avatar:'',
            username:'jcyjcy',
            password:'jcyjcy',
            desc:'管理员',
            roles:['管理员'],
            buttons:['cuser.detail'],
            routes:['home'],
            token:'Admin_Token',
        }
    ]
}

export default [
    {
      url: '/api/user/login',
      method: 'post',
      response: ({ body }) => {
        let {username, password} = body;
        const checkUser = createUserList().find(
            (item) => item.username === username && item.password === password
        )
        if(!checkUser){
            return {code:201, data:{message:'账号或密码不正确'}}
        }
        return {code: 200, data: {message:'登录成功', token: checkUser.token} }
      },
    },
    {
      url: '/api/user/info',
      method: 'get',
      response: (request) =>{
        let token = request.headers.token;
        const checkUser = createUserList().find((item) => item.toekn === token)
        if(!checkUser){
            return {code:201, data:{message:'获取用户信息失败'}}
        }
        return {code:200, data:{checkUser}}
      }
    }
  ]