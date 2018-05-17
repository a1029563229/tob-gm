export const handlerMixins = {
    methods: {
        locationHref(url) {
            let urlRE = /http$/;
            if (urlRE.test(url)) {
                location.href = url;
            } else {
                this.$router.push(url);
            }
        },

        dealError(err) {
            switch (err.error_category) {
                default:
                    this.$message.warning("未识别状态码：" + err.error_code);
                    break;
                case "B":
                    switch (err.error_number) {
                        default:
                            this.$message.warning("未识别状态码" + err.error_code);
                            break;
                        case 4:
                            this.$message.warning("验证码输入错误");
                            break;
                        case 5:
                            this.$message.warning("该用户已存在");
                            break;
                        case 8:
                            this.$message.warning("用户名或者密码错误");
                            break;
                        case 9:
                            this.$message.warning("操作已超时");
                            break;
                    }
                    break;
            }
        },
    }
}