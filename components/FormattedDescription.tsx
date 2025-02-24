import type React from "react"

interface FormattedDescriptionProps {
  fulldescription: string
}

const FormattedDescription: React.FC<FormattedDescriptionProps> = ({ fulldescription }) => {
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, blockIndex) => {
      if (block.startsWith("- ")) {
        // Render as unordered list
        return (
          <ul key={blockIndex} className="list-disc pl-5 mb-2">
            {block.split("\n").map((item, itemIndex) => (
              <li key={itemIndex} className="text-gray-700 dark:text-white/70 text-sm">
                {item.substring(2)}
              </li>
            ))}
          </ul>
        )
      } else if (block.includes("\n")) {
        // Render as multiple paragraphs
        return block.split("\n").map((line, lineIndex) => (
          <p key={`${blockIndex}-${lineIndex}`} className="text-gray-700 dark:text-white/70 text-sm mb-2">
            {line}
          </p>
        ))
      } else {
        // Render as single paragraph or heading
        const Tag = blockIndex === 0 ? "h1" : "p"
        return (
          <Tag
            key={blockIndex}
            className={`text-gray-700 dark:text-white/70 ${
              blockIndex === 0 ? "text-base font-semibold mb-2" : "text-sm mb-2"
            }`}
          >
            {block}
          </Tag>
        )
      }
    })
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 overflow-y-auto">{renderContent(fulldescription)}</div>
    </div>
  )
}

export default FormattedDescription

