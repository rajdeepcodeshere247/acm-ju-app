import { benefitData } from "@/data/BenifitData";

export const Benefits = () => {
  return (
    <div className="bg-white lg:col-span-3 rounded-md py-8 px-12">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 w-full text-center pb-6">
        Why should you join ACM?
      </h2>
      <ul className="list-disc">
        {benefitData.map((benefit) => (
          <li key={benefit.value}>
            <p className="mx-auto mt-2 text-gray-700 text-justify">
              {benefit.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
