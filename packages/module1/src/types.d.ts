


export interface ILoginResponse {
	code: number;
	data: Data;
	msg:  string;
}

export interface Data {
	token: Token;
	user:  User;
}

export interface Token {
	short: string;
	token: string;
}

export interface User {
	id:                     number;
	unionid:                string;
	member_id:              string;
	member_avatar:          string;
	bind_wx:                number;
	institution_id:         number;
	company_id:             number;
	programme_id:           number;
	department_id:          number;
	salesman_id:            number;
	sys_dept_id:            number;
	sys_user_id:            number;
	signature:              string;
	key:                    string;
	username:               string;
	password:               string;
	realname:               string;
	identity_no:            string;
	mobile:                 string;
	wechatid:               string;
	reg_source:             number;
	risk_score:             string;
	risk_name:              string;
	risk_code:              string;
	total_pay:              number;
	state:                  number;
	is_give:                number;
	is_receive_7day:        number;
	is_buy_week:            number;
	grant_wx_userinfo:      number;
	customer_type:          number;
	risk_time:              Date;
	created:                Date;
	updated:                Date;
	deleted:                string;
	dept_name:              string;
	calc_code:              string;
	is_buy_strategy:        boolean;
	mobile_encrypt_app:     string;
	is_register_dxzgapp:    boolean;
	is_risk_expired:        boolean;
	is_identity_expired:    boolean;
	pop_7day_expired_risk:  boolean;
	pop_15day_expired_risk: boolean;
	is_zhibo_account:       boolean;
	gender:                 number;
	birthday:               Date;
	motto:                  string;
	brief:                  string;
	tag:                    string;
}
export interface LoginForm {
  mobile: string;
  password: string;
}
export interface Form {
  username: string;
  idCard: string;
}

export interface VerifyIdentityResponse {
  msg: string;
  code: number;
}
