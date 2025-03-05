interface SourceCodeButtonProps {
  link: string;
  label?: string;
}

const SourceCodeButton: React.FC<SourceCodeButtonProps> = ({
  link,
  label = "🛠 View Source",
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white transition-all hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none"
    >
      {label}
    </a>
  );
};

export default SourceCodeButton;
