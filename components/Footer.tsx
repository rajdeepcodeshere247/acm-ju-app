import SocialMediaHandleButton, {
    SocialMedia,
    SocialMediaType,
} from "./SocialMedia";

const chapterSocialMediaHandles = [
    {
        url: "https://www.twitter.com/",
        socialMedia: new SocialMedia(SocialMediaType.TWITTER),
    },
    {
        url: "https://www.instagram.com/",
        socialMedia: new SocialMedia(SocialMediaType.INSTAGRAM),
    },
    {
        url: "https://www.facebook.com/",
        socialMedia: new SocialMedia(SocialMediaType.FACEBOOK),
    },
    {
        url: "https://www.linkedin.com/",
        socialMedia: new SocialMedia(SocialMediaType.LINKEDIN),
    },
];

export default function Footer() {
    return (
        <div className="px-4 pt-8 sm:max-w-xl md:max-w-full md:px-24 lg:px-8">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="sm:col-span-2">
                    {/* Jadavpur University Logo  */}
                    <img
                        className="h-12"
                        src="https://admission.jdvu.ac.in/fatadmission/frontend/image/logo-black.png"
                    />
                    {/* ACM Logo */}
                    <img
                        // negative translate is used otherwise acm logo is padded so it is not aligned with JU logo
                        className="h-16 -translate-x-2.5 mt-4"
                        src="/acm-logo.svg"
                    />
                </div>
                <div className="space-y-2 text-sm">
                    <p className="text-base font-bold tracking-wide text-gray-900">
                        Contacts
                    </p>
                    {/* <div className="flex">
                        <p className="mr-1 text-gray-800">Phone:</p>
                        <a
                            href="tel:850-123-5021"
                            aria-label="Our phone"
                            title="Our phone"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            850-123-5021
                        </a>
                    </div> */}
                    <div className="flex flex-col">
                        <p className="mr-1 text-gray-800 font-semibold">Email:</p>
                        <a
                            href="mailto:acmjustudentchapter@gmail.com"
                            aria-label="Our email"
                            title="Our email"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            acmjustudentchapter@gmail.com 
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <p className="mr-1 text-gray-800 font-semibold">Address:</p>
                        <a
                            href="https://maps.app.goo.gl/ekS9RmQ1RrNeXzrm9"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Our address"
                            title="Our address"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Plot No.8, B-73-80, Salt Lake Bypass, LB Block, Sector 3, Bidhannagar, Kolkata, West Bengal 700098
                        </a>
                    </div>
                </div>
                <div>
                    <span className="text-base font-bold tracking-wide text-gray-900">
                        Social
                    </span>
                    <div className="flex items-center mt-2 space-x-3">
                        {chapterSocialMediaHandles.map((handleDetails) => (
                            <SocialMediaHandleButton
                                key={handleDetails.url}
                                url={handleDetails.url}
                                socialMedia={handleDetails.socialMedia}
                                length={24}
                            />
                        ))}
                    </div>
                    <p className="mt-4 pr-8 text-sm text-gray-500 text-justify">
                        Follow Us On Social Media Handles To Get Updates
                        Regarding Future Events
                    </p>
                </div>
            </div>
            <div className="flex flex-col-reverse justify-between py-5 border-t lg:flex-row text-sm text-gray-600">
                © Copyright {(new Date()).getFullYear()} JU ACM Students Chapter. All rights reserved.
                {/* this website is made by Aditya Mayukh Som */}
            </div>
        </div>
    );
}
