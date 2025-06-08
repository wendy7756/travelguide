export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
	text: string;
	dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{
		text: "Home 主页",
		link: "/",
	},
	{
		text: "Themes 主题",
		link: "/portfolio/",
	},
	{
		text: "Destinations 目的地 ",
		link: "/#pricing",
	},
	{
		text: "Pages",
		dropdown: [
			{
				text: "Tips",
				link: "/tools/",
			},
			{
				text: "Privacy",
				link: "/privacy-policy/",
			},
			{
				text: "Terms",
				link: "/terms-of-use/",
			},

		],
	},
];

export default navConfig;
