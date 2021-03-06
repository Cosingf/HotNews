package cn.xmu.edu.hotnews.service;


import cn.xmu.edu.hotnews.entity.User;
import cn.xmu.edu.hotnews.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    @Autowired
    private UserMapper userDao;


    public int  register(User user) {

        //判断用户是否存在
        if (userDao.selectByAccount(user.getAccount()) == null) {
            userDao.insert(user);
            return 200;
        }
        else {
            return 2004;
        }
    }
    //用户登陆逻辑
    public String login(User user) {
        //通过用户名获取用户
        User dbUser = userDao.selectByAccount(user.getAccount());
        //若获取失败
        if (dbUser == null) {
            return "该用户不存在";
        }
        //获取成功后，将获取用户的密码和传入密码对比
        else if (!dbUser.getPassword().equals(user.getPassword())){
            return "密码错误";
        }
        else {
            //若密码也相同则登陆成功
            //让传入用户的属性和数据库保持一致
            user.setId(dbUser.getId());

            return "登陆成功";
        }
    }

    public User getUser(String account){
        return userDao.selectByAccount(account);
    }

    public User getUserById(Long userId){
        return userDao.selectByPrimaryKey(userId);
    }

    public void updateUser(User user){
        userDao.updateByPrimaryKey(user);
    }
}
