import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/tahirkhanji007',
        'instagram': 'https://www.instagram.com/tahirkhanji007/',
        'twitter': 'https://twitter.com/tahirkhanji007',
        'linkedin': 'https://www.linkedin.com/in/tahirkhanji007/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'tahirkhanji007@gmail.com',
        onClick: () => openLink('mailto:tahirkhanji007@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements