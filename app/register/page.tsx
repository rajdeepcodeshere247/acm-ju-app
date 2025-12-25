import { studyyearOptions } from "@/data/studyYearOptions";
import { departmentList } from "@/data/departmentList";
import { Benefits } from "@/components/Benefits";

/**
 Registration Form for JU ACM Student Chapter
 User must be subscribed as ACM Student Member
**/
export default function RegisterPage() {
  return (
    <section className="px-8 py-10 bg-slate-50 grid grid-cols-1 lg:grid-cols-5 gap-8 w-full">
      <form
        action="#"
        method="POST"
        className="lg:col-span-2 bg-white rounded-md p-8"
      >
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 w-full text-center pb-6">
          Register
        </h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6">
          {/*Name Field*/}
          <TextField title="Name" />

          {/*Email Field*/}
          <TextField title="Email" />

          {/*ACM Member Number Field*/}
          <TextField title="ACM Member Number" />

          {/*Study Year Field*/}
          <OptionField opdata={studyyearOptions} title="Year of Study" />

          {/*Department Field*/}
          <OptionField opdata={departmentList} title="Department" />

          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
        {/*ACM Member Subscription Link*/}
        <a
          href="https://services.acm.org/public/qj/quickjoin/qj_control.cfm?promo=PWEBTOP&form_type=Student"
          className="mt-8 block text-sm underline text-blue-600 visited:text-purple-600 text-center"
        >
          Register yourself as an ACM student member
        </a>
      </form>
      <Benefits />
    </section>
  );
}

/*
 Generic Text Field for Registration Form
*/
function TextField({ title }: { title: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-900">
        {title}
      </label>
      <div className="mt-2">
        <input
          type="text"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}

/*
 Generic Option Field for Registration Form
*/
function OptionField({
  opdata,
  title,
}: {
  opdata: OptionData[];
  title: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold leading-6 text-gray-900">
        {title}
      </label>
      <div className="mt-2">
        <select className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          {opdata.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
