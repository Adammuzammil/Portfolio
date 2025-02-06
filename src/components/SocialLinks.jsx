const SocialLinks = () => {
  return (
    <>
      <div>
        <div>
          <span className="text-sm md:text-base">Socials</span>
        </div>
        <div className="inline-flex items-center gap-3 text-sm md:text-base">
          <a href="#" className="hover:underline underline-offset-4">
            Linkedin
          </a>
          <a href="#" className="hover:underline underline-offset-4">
            Telegram
          </a>
          <a href="#" className="hover:underline underline-offset-4">
            WhatsApp
          </a>
          <a href="#" className="hover:underline underline-offset-4">
            Instagram
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialLinks;

export const Location = () => {
  const getCurrentDayDateTime = () => {
    const now = new Date();
    return {
      day: now.toLocaleDateString("en-US", { weekday: "long" }),
      date: now.toLocaleDateString("en-US", { day: "2-digit", month: "short" }),
      year: now.getFullYear(), // ✅ Extract year separately
      time: now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    };
  };

  const { day, date, year, time } = getCurrentDayDateTime();
  return (
    <div className="text-white flex flex-col justify-end items-end pt-5 md:text-base">
      <p>Located in Mangalore</p>
      <p>
        {day} {date} {year}
      </p>
      <p>{time}</p>
    </div>
  );
};
