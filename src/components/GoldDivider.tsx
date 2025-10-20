const GoldDivider = () => {
  return (
    <div className="flex items-center justify-center gap-3 my-8 md:my-12 gold-shimmer">
      <div className="h-px w-24 md:w-48 bg-gradient-to-r from-transparent via-gold to-gold" />
      <div className="text-gold text-xl">◆</div>
      <div className="h-px w-24 md:w-48 bg-gradient-to-l from-transparent via-gold to-gold" />
    </div>
  );
};

export default GoldDivider;
