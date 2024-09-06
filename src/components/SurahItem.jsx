const SurahItem = ({ surahNumber, surahEnglishTitle, surahArabicTitle }) => {
  return (
    <div className="flex items-center gap-4 px-2 py-3 bg-[#297870] hover:bg-[#256F67] rounded-lg cursor-pointer group hover:scale-110 transition-all duration-300 ease-in-out pl-4">
      <p className="font-english font-bold">{surahNumber}</p>
      <div className="text-xs lg:text-sm space-y-2 font-semibold flex-1 flex flex-col items-center">
        <p className="font-english">{surahEnglishTitle}</p>
        <p className="font-arabic text-right tracking-wider">
          {surahArabicTitle}
        </p>
      </div>
    </div>
  );
};

export default SurahItem;
