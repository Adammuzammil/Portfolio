const SocialLinks = () => {
  return (
    <>
      <div>
        <div>
          <span>Socials</span>
        </div>
        <div className="inline-flex items-center gap-3">
          <span>Linkedin</span>
          <span>Telegram</span>
          <span>WhatsApp</span>
          <span>Instagram</span>
        </div>
      </div>
      <Location />
    </>
  );
};

export default SocialLinks;

const Location = () => {
  return (
    <div className="text-white flex flex-col justify-end items-end pt-5">
      <p>Located in the Mangalore</p>
      <p>Tue Nov 26 2024</p>
      <p>15:16</p>
    </div>
  );
};
