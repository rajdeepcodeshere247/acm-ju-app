type EventData = {
    id: number;
    title: string;
    speakers: string[];
    date: Date;
    mode: "In-Person" | "Online" | "Hybrid";
    images: string[]; // for an event with no images, pass empty array
    description: string; // for an event without description, pass empty string
    url?: URL;
};