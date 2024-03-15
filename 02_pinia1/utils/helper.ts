export const getBaseUrl = () => {
	let baseurl = `${window.location.protocol}//${window.location.host}`;
	if (baseurl.match(/^\//g)) {
		baseurl = `${window.location.protocol}//${window.location.host}${baseurl}`;
	}
	return baseurl;
};
export function getBasePathName() {
	const a = document.createElement("a");
	a.href = getBaseUrl();
	let rt = a.pathname.match(/^\//g) ? a.pathname : `/${a.pathname}`;
	rt = rt.match(/\/$/g) ? rt : `${rt}/`;
	return rt;
}
