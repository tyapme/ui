import { MDParser } from "@/registry/new-york-v4/ui/md-parser"

const MARKDOWN = `# The Joke Tax Chronicles

Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne.

## The King's Plan

The king thought long and hard, and finally came up with [a brilliant plan](#): he would tax the jokes in the kingdom.

> "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."

### The Joke Tax

The king's subjects were not amused. The taxes were:

- 1st level of puns: 5 gold coins
- 2nd level of jokes: 10 gold coins
- 3rd level of one-liners: 20 gold coins

### Results

| King's Treasury | People's Happiness |
| --------------- | ------------------ |
| Empty           | Overflowing        |
| Modest          | Satisfied          |
| Full            | Ecstatic           |

Use \`inline code\` for short snippets.

\`\`\`ts
const taxJoke = (level: number) => level * 5
\`\`\`
`

export default function MDParserDemo() {
  return (
    <div className="mx-auto max-w-2xl">
      <MDParser>{MARKDOWN}</MDParser>
    </div>
  )
}
