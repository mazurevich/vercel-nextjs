import { Suspense } from "react";
import Table from "../../ui/customers/table";
import { lusitana } from "@/app/ui/fonts";
import { fetchCustomersSummary } from "@/app/lib/data";

const CustomersTableSkeleton = () => <div>skeleton</div>;

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  const data = await fetchCustomersSummary(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
          Customers
        </h1>
      </div>
      <Suspense fallback={<CustomersTableSkeleton />}>
        <Table customers={data} />
      </Suspense>
    </div>
  );
}
