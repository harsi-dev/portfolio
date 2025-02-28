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
      className="inline-flex items-center gap-2 rounded-xl border bg-gray-800 px-4 py-2 font-semibold text-white transition-all hover:bg-gray-900 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
    >
      {label}
    </a>
  );
};

export default SourceCodeButton;
