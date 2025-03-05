import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-full flex flex-col background relative items-center gap-[53px]">
      <h1 className="bg-white rounded-lg  w-11/12 text-center mt-[40px] font-bold text-4xl px-10 py-2">Random gifts</h1>
      <div className="flex flex-col w-full items-center gap-[53px]">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}
