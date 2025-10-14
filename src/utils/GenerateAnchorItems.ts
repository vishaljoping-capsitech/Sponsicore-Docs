import { AnchorItemProps, Section } from "../types/Types";


export const generateAnchorItems = (sections: Section[]): AnchorItemProps[] => {
    return sections.map((section) => {

        if (section.children) {
            return {
                key: section.id,
                href: `#${section.id}`,
                title: section.title,
                children: generateAnchorItems(section.children)
            };
        }

        return {
            key: section.id,
            href: `#${section.id}`,
            title: section.title
        };
    });
};