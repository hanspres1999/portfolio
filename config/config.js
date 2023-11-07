
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Hansel",
	links: [
		{
			title: "Education",
			link: "#skills",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hi there! This is Hansel.",
	description: "A CS Grad student who spends time making jokes about Music theory and cooks food from scratch.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/160ejbVn7ZXdPixllZNSNHDC8aU_CfOj6/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "About Me",
	description: [
		"I am student at George Mason University studying MS in Computer Science. I completed my Bachelors in Computer Engineering from the University of Mumbai in 2020. ",
		"After completing my undergrad, I worked for two years at Larsed and Toubro Infotech (Now LTIMindtree) in Mumbai.\
		At George Mason University, I took up a myriad of different courses right from Data Mining to Reinforcement Learning; from Databases to Computer Graphics. Having said this, I used the time while pursuing my masters to build my \
		soft skills, perfect my presentation skills and master interpersonal communication which, I believe is equally important as honing my technical skills. ",
		"When I am away from the screen I tend to indulge in many different activities. If it's early morning, I like to swim. Twice a week I am a part of two different choirs (With different music genres) and when time permits, I dabble in music theory and wriing choral music.", " \n\
		Also if I havent already mentioned, I love to cook!",
	],
}

export const work = {
	title: "Education",
	cards: [
		{
			title: "George Mason University",
			description: "MS Computer Science, 2022 - 2024",
			icons: null,
		},
		{
			title: "University of Mumbai",
			description: ["BE Computer Engineerng, 2016 - 2020"],
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "2048 Solver with Reinforcement Learning",
			description: "(In progress) Using Reinforcement learning and classical learning appraches such as Monte Carlo Tree Search to play the 2048 game.",
			icons: [
				// {
				// 	icon: faAppStore,
				// 	link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
				// }
				// {
				// 	icon: faGithub,
				// 	link: "https://github.com/hashirshoaeb/star_book",
				// }
				,
			]
		},
		{
			title: "Classroom Lecture Attention Analysis",
			description: "A framework build to find ways to quantify attention, using computer vision which could gain insights on teaching-learning behaviour in a classroom.",
			icons: [
				{
					icon: faNewspaper,
					link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3685655",
				}
			]
		},
		{
			title: "Task Automator using Python                       ",
			description: "A tool used to automate tasks by recording keystrokes and mouse-clicks. The tool also \
			saves the tasks for future use and can record unsolicited activities.",
			icons: [

			]
		},
	],
}

export const contact = {
	title: "Contact Me",
	description: "Looking forward to hearing from you. Contact me at hanspres1999@gmail.com",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:hanspres1999@gmail.com",
			isPrimary: true,
		},

	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Hansel Saldanha | Software Engineer | Python developer",
	description: "I am student at George Mason University studying MS in Computer Science. I completed my Bachelors in Computer Engineering from the University of Mumbai in 2020",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@hanspres1999",
	description: "Computer Engineer | Flutter | Reactjs Developer",
	cards: [
		{
			title: "My website",
			link: "https://hashirshoaeb.com/",
		},
		{
			title: "QuranTalk App",
			link: "https://www.qurantalk.app/",
		},
		{
			title: "StarBook App",
			link: "https://starbook.dev/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/hashirshoaeb/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/hashirshoaeb/",
		},
	]
}