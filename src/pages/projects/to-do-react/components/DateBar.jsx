const date = new Date();
const day = date.getDate();
const dayName = date.toLocaleString("en-EN", { weekday: "long" });
const monthName = date.toLocaleString("en-EN", { month: "long" });
const year = date.getFullYear();

function DateBar() {
  return (
    <header className="date-bg bg-[#8b8574] flex flex-row w-full justify-between p-5 font-[Montserrat] items-center uppercase bg-right-bottom rounded-md m-3 text-white">
      <div className="flex items-center">
        <span className="text-6xl md:text-7xl pr-3">{day}</span>
        <div className="flex flex-col text-lg md:text-2xl">
          <span>{monthName}</span>
          <span className="font-extralight">{year}</span>
        </div>
      </div>
      <span className="text-lg md:text-xl">{dayName}</span>
    </header>
  );
}

export default DateBar;
