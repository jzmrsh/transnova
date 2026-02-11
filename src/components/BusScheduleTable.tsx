// import { useBusSchedules } from "@/hooks/UseBusSchedules";
// import { BusSchedule } from "@/schemas/BusSchema";
// import { Card } from "@/components/ui/card";
// import { Skeleton } from "@/components/ui/skeleton";

// function ScheduleSection({
//   title,
//   columns,
//   dataGetter,
// }: {
//   title: string;
//   columns: { label: string; key: string }[];
//   dataGetter: (day: string) => BusSchedule[];
// }) {
//   return (
//     <div className="space-y-2">
//       <div className="bg-[#F27121] text-center py-2 rounded-full font-bold text-lg shadow-md">{title}</div>

//       <div className="grid grid-cols-3 border-x border-b border-white/20">
//         {columns.map((col) => (
//           <div key={col.key} className="flex flex-col">
//             <div className="bg-[#F27121] border-b border-white/40 text-center py-1 font-bold text-xs">{col.label}</div>
//             <div className="bg-[#003380] min-h-[300px] divide-y divide-white/10">
//               {dataGetter(col.key).map((item, idx) => (
//                 <div key={idx} className="px-2 py-1 flex flex-col items-start border-r border-white/10 last:border-r-0">
//                   <span className="font-black text-sm">{item.time}</span>
//                   {item.note && (
//                     <span className="text-[9px] leading-tight uppercase font-medium text-yellow-300">{item.note}</span>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// const BusScheduleTable = (lineId: string) => {
//   const { data: schedules, isLoading, error } = useBusSchedules(lineId);

//   if (isLoading) return <Skeleton className="w-full h-[500px] bg-muted" />;
//   if (error) return <div className="text-red-500">Erro ao carregar horários.</div>;

//   // Filtros para organizar a grade conforme a imagem
//   const filterData = (type: string, day: string) => schedules?.filter((s) => s.type === type && s.day === day) || [];

//   const columns = [
//     { label: "SEG À SEX", key: "SEMANA" },
//     { label: "SÁBADO", key: "SABADO" },
//     { label: "DOMINGO", key: "DOMINGO" },
//   ];

//   return (
//     <div className="w-full max-w-5xl mx-auto bg-[#0047AB] p-4 font-sans text-white">
//       {/* Cabeçalho da Linha */}
//       <div className="mb-6 text-center md:text-left">
//         <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter">
//           LINHA 01 - <span className="text-yellow-400">NOVO HORIZONTE / CIDADE NOVA</span>
//         </h2>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Seção: Saída Novo Horizonte */}
//         <ScheduleSection title="NOVO HORIZONTE" columns={columns} dataGetter={(day) => filterData("NOVO_HORIZONTE", day)} />

//         {/* Seção: Saída Cidade Nova */}
//         <ScheduleSection title="CIDADE NOVA" columns={columns} dataGetter={(day) => filterData("CIDADE_NOVA", day)} />
//       </div>
//     </div>
//   );
// };

// export default BusScheduleTable;
