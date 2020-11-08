export const client = async (endpoint, { body, ...customConfig } = {}) => {
	const headers = { "Content-Type": "application/json" };

	const config = {
		method: body ? "POST" : "GET",
		...customConfig,
		headers: {
			...headers,
			...customConfig.headers,
		},
	};
	console.log("CONFIG: ", config);

	if (body) {
		config.body = JSON.stringify(body);
	}

	let data;
	try {
		const response = await window.fetch(endpoint, config);
		data = await response.json();
		console.log("Endpoint: ", endpoint);
		console.log("Config: ", config);
		console.log("RESPONSE: ", response);
		console.log("DATA: ", data);
		if (response.ok) {
			console.log(data);
			return data;
		}
		console.log("error thrown");
		throw new Error(response.statusText);
	} catch (err) {
		console.log("error: ", err);
		return Promise.reject(err.message ? err.message : data);
	}
}

client.get = function (endpoint, customConfig = {}) {
	console.log("get called");
	console.log(endpoint);
	return client(endpoint, { ...customConfig, method: "GET" });
}

client.post = function (endpoint, body, customConfig = {}) {
	return client(endpoint, { ...customConfig, body });
}