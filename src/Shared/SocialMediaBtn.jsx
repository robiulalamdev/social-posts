

const SocialMediaBtn = ({ pic, name }) => {
  return (
    <button className="border w-full whitespace-nowrap font-semibold text-base flex justify-center gap-4 items-center border-slate-200 bg-white rounded-full py-3 px-4">
      <img src={pic} alt="" />
      {name}
    </button>
  );
};

export default SocialMediaBtn;
