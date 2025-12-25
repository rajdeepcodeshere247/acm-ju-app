import Event from "@/components/Event";
import { eventList } from "@/data/EventList";
import Image from "next/image";

export default function EventsPage() {
  return (
    <section className="antialiased bg-slate-50 py-8">
      <div className="m-12 bg-white p-10">
        <h1 className="mb-4 pb-6 flex gap-x-3 items-center border-b border-gray-200">
          <Image
            src="/announcement.png"
            width={30}
            height={28}
            alt="announcement icon"
          />
          <span className="text-2xl  text-slate-800 font-medium">
            Events And Notices
          </span>
        </h1>

        <div className="flow-root">
          {
            // the most recent event should go on the top, hence sort by
            // date in the descending order.
            eventList
              .sort((ev1, ev2) => {
                return ev2.date.getTime() - ev1.date.getTime();
              })
              .map((event) => {
                return <Event key={event.id} ev={event} />;
              })
          }
        </div>
      </div>
    </section>
  );
}
