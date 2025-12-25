import Image from "next/image";

export enum SocialMediaType {
    LINKEDIN,
    GITHUB,
    INSTAGRAM,
    TWITTER,
    YOUTUBE,
    TWITCH,
    FACEBOOK,
    LEETCODE
}

/**
 * SocialMedia Class
 *
 * This class represents a social media icon with its associated URL and alt text.
 * It supports two social media types: LinkedIn and GitHub, but additional types can be added.
 * Additional social media types can be added to the SocialMediaType enum
 * @see `SocialMediaType` for adding new social media types
 * @class
 * @param {SocialMediaType} socialMediaType - The type of social media icon to create (LinkedIn or GitHub).
 *
 * @property {string} iconURL - The URL to the social media icon image.
 * @property {string} alt - The alt text describing the social media icon.
 *
 * @throws {Error} Throws an error if an unsupported social media type is provided.
 *
 * @example
 * // Import the SocialMedia class and SocialMediaType enum
 * import SocialMedia, { SocialMediaType } from './SocialMedia';
 *
 * // Create a LinkedIn social media object
 * const linkedInSocialMedia = new SocialMedia(SocialMediaType.LINKEDIN);
 *
 * // Access the icon URL and alt text
 * console.log(linkedInSocialMedia.iconURL); // "/icons/linkedin.png"
 * console.log(linkedInSocialMedia.alt); // "linkedin logo"
 *
 * // Create a GitHub social media object
 * const githubSocialMedia = new SocialMedia(SocialMediaType.GITHUB);
 *
 * // Access the icon URL and alt text
 * console.log(githubSocialMedia.iconURL); // "/icons/github.png"
 * console.log(githubSocialMedia.alt); // "github logo"
 */
export class SocialMedia {
    readonly iconURL: string;
    readonly alt: string;

    /**
     * Create a new SocialMedia object based on the provided social media type.
     *
     * @constructor
     */
    constructor(socialMediaType: SocialMediaType) {
        if (socialMediaType === SocialMediaType.LINKEDIN) {
            this.iconURL = "/icons/linkedin.png";
            this.alt = "linkedin logo";
        } else if (socialMediaType === SocialMediaType.GITHUB) {
            this.iconURL = "/icons/github.png";
            this.alt = "github logo";
        } else if (socialMediaType === SocialMediaType.INSTAGRAM) {
            this.iconURL = "/icons/instagram.png";
            this.alt = "instagram logo";
        } else if (socialMediaType === SocialMediaType.TWITTER) {
            this.iconURL = "/icons/twitter.png";
            this.alt = "twitter logo";
        } else if (socialMediaType === SocialMediaType.TWITCH) {
            this.iconURL = "/icons/twitch.png";
            this.alt = "twitch logo";
        } else if (socialMediaType === SocialMediaType.FACEBOOK) {
            this.iconURL = "/icons/facebook.png";
            this.alt = "facebook logo";
        } else if (socialMediaType === SocialMediaType.YOUTUBE) {
            this.iconURL = "/icons/youtube.png";
            this.alt = "youtube logo";
        } else if (socialMediaType === SocialMediaType.LEETCODE) {
            this.iconURL = "/icons/leetcode.png";
            this.alt = "leetcode logo";
        } else {
            throw new Error("social media type not supported");
        }
    }
}

/**
 * SocialMediaHandleButton Component
 *
 * This component displays a clickable social media icon linked to a specified URL.
 * It supports two social media types: LinkedIn and GitHub.
 *
 * @component
 * @example
 * // Import the SocialMediaHandleButton component
 * import SocialMediaHandleButton, { SocialMediaType, SocialMedia } from './SocialMediaHandleButton';
 *
 * // Render a LinkedIn icon with a link to the user's LinkedIn profile
 * <SocialMediaHandleButton
 *     url="https://www.linkedin.com/in/your-profile"
 *     socialMedia={new SocialMedia(SocialMediaType.LINKEDIN)}
 * />
 *
 * // Render a GitHub icon with a link to the user's GitHub profile
 * <SocialMediaHandleButton
 *     url="https://github.com/your-username"
 *     socialMedia={new SocialMedia(SocialMediaType.GITHUB)}
 * />
 */
export default function SocialMediaHandleButton({
    url,
    socialMedia,
    length,
}: {
    url: string;
    socialMedia: SocialMedia;
    length?: number;
}) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            {/* Display the social media icon using the provided URL and alt text */}
            <Image
                className="rounded-md"
                src={socialMedia.iconURL}
                alt={socialMedia.alt}
                width={length || 30}
                height={length || 30}
            />
        </a>
    );
}
