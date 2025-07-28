import { openLink } from "./methods"

const outer = {
    title1:  `G'day, I'm`,
    title2: 'Tahir Khan,',
    decrypTexts: [
        'A Mern Developer',
        'A Full Stack Developer',
        'I build things for the web',
        'A Gamer',
    ],
    desciption: `A dedicated and disciplined Full Stack engineer who love to create things for internet, having more than 1.5 years of field experience I've delivered projects to many happy clients over globe.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:tahirkhanji007@gmail.com?subject=Hello')
    }
}

export default outer
