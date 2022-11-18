// 请求拦截器
axios.interceptors.request.use(
	function (config) {
		// 在发送请求之前做些什么
		config.headers = {
			"Content-Type": "application/json;charset=utf-8",
		};
		return config
	},
	// 请求失败
	function (error) {
		console.log(error);
		throw "你发送的请求体有问题";
	}
)

// 响应拦截器
axios.interceptors.response.use(
	function (response) {
		// 对响应数据做点什么
		return response.data
	},
	// 响应失败
	function (error) {
		console.log(error);
		throw "你发送的请求体有问题";
	}
)