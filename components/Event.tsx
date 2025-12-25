import fs from "fs";
import path from "path";
// dedicated client component to handle images
import Gallery from "./Gallery";

export default async function Event({ ev }: { ev: EventData }) {
  // each event should have a corresponding folder with name same as
  // id of the event which should contain pictures of that event
  const dirRelativeToPublicFolder = "event-images/" + ev.id;

  // directory which should contain the pictures of the current event
  const dir = path.resolve("./public", dirRelativeToPublicFolder);

  // checks if the directory containing pictures of the event exists
  // TODO: the name could be changed into directory contents and then only
  // files which are images (checked using extensions like .jpeg or .png)
  // could be used to create imagePaths
  const imageNames = fs.existsSync(dir) ? fs.readdirSync(dir) : [];
  const imagePaths = imageNames.map((imageName) =>
    path.posix.join("/", dirRelativeToPublicFolder, imageName)
  );
  return (
    <article className="py-4 border-b border-gray-200 mb-3">
      <section className="flex justify-between flex-col md:flex-row">
        <h2 className="text-2xl font-semibold text-slate-800 ">
          <a href="#" className="hover:underline">
            {ev.title}
          </a>
        </h2>
        <p className="font-normal whitespace-nowrap text-nowrap text-gray-500 md:text-right">
          {ev.date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          })}
        </p>
      </section>
      {ev.speakers.length > 0 && (
        <p className="mt-1">by&nbsp;{ev.speakers.join(", ")}</p>
      )}

      <p className="mt-1">{ev.mode}</p>
      <p className="mt-4 text-gray-500">{ev.description}</p>
      <Gallery imagePaths={imagePaths} />
    </article>
  );
}
