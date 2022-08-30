type HeaderType = {
  t1: String;
  t2: String;
};

export default function Header({ t1, t2 }: HeaderType) {
  return (
    <div className='bg-bg-2 brightness-90 w-full h-screen bg-fixed flex justify-center flex-col items-center bg-cover text-white'>
      <p className='text-xl mb-4 tracking-wider'>{t1}</p>
      <h1 className='text-6xl sm:text-7xl text-center font-primary font-extrabold leading-1.5 '>
        {t2}
      </h1>
    </div>
  );
}
