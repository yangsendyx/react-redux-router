
export function AjaxGet(url, cb) {
	let opt = {
		type: 'get',
		url: url
	};
	fetchFn(opt, cb);
}

export function AjaxPost(url, data, cb) {
	let opt = {
		type: 'post',
		url: url,
		data: data
	};
	fetchFn(opt, cb);
}

export function AjaxPostFile(url, formData, cb) {
	let opt = {
		type: 'file',
		url: url,
		data: formData
	};
	fetchFn(opt, cb);
}

function fetchFn(opt, cb) {
	let type = opt.type;
	let option = { method: 'get' };
	if( type == 'post' ) {
		option.method = 'post';
		option.body = JSON.stringify(opt.data);
		option.headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		};
	}
	if( type == 'file' ) {
		option.method = 'post';
		option.body = opt.data;
	}
	
	fetch( opt.url, option )
	.then(function(response) {
		if( !response.ok ) console.log('请求失败');
		return response.json();
	}).then(function(json) {
		cb( json );
	}).catch(function(ex) {
		console.log('通信失败');
	});
}