// Display on the search
export class packageData {
	description: string;
	suggested_score: number;
	url: string;
}

export class PackageItem {
	value: string;
	data: packageData;
}

export class PackageSearchInfo {
	packages: PackageItem[];
	standard: PackageItem[]; // in standard, only value is valid
}

// Display search result
export class LinkInfo {
	npm: string;
	homepage: string;
	repository: string;
	bugs: string;
}

export class AuthorInfo {
	name: string;
}

// Publisher, Maintainer
export class PublisherInfo {
	username: string;
	email: string;
}

export class ScoreDetail {
	quality: number;
	popularity: number;
	maintenance: number;
}
export class ScoreInfo {
	final: number;
	detail: ScoreDetail;
}

export class PackageInfo {
	name: string;
	scope: string;
	version: string;
	description: string;
	date: Date;
	links: LinkInfo;
	author: AuthorInfo;
	publisher: PublisherInfo;
	maintainers: PublisherInfo[];
}

export class PackageResult {
	package: PackageInfo;
	score: ScoreInfo;
	searchScore: number;
}