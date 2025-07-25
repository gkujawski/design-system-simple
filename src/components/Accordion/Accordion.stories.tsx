import type { Meta, StoryObj } from "@storybook/react"
import { Accordion } from "./Accordion"

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible accordion component that supports single or multiple open sections with smooth animations.",
      },
    },
  },
  argTypes: {
    allowMultiple: {
      control: "boolean",
      description: "Allow multiple sections to be open simultaneously",
    },
    items: {
      control: "object",
      description: "Array of accordion items with id, title, and content",
    },
    className: {
      control: "text",
      description: "Additional CSS class name",
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          backgroundColor: "#f4f4f9",
          padding: "2rem",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

const defaultItems = [
  {
    id: "item-1",
    title: "Section 1",
    content: (
      <p>
        This is the content for the first section. It can contain any HTML elements you need, like paragraphs, lists, or
        images.
      </p>
    ),
  },
  {
    id: "item-2",
    title: "Section 2",
    content: (
      <p>
        This is the content for the second section. The accordion allows only one section to be open at a time if you
        use radio buttons, but with checkboxes, multiple can be open.
      </p>
    ),
  },
  {
    id: "item-3",
    title: "Section 3",
    content: (
      <p>
        This is the content for the third section. The smooth animation is achieved using CSS transitions on the
        `max-height` property.
      </p>
    ),
  },
]

export const Default: Story = {
  args: {
    items: defaultItems,
    allowMultiple: true,
  },
}

export const SingleOpen: Story = {
  args: {
    items: defaultItems,
    allowMultiple: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Only one section can be open at a time.",
      },
    },
  },
}

export const RichContent: Story = {
  args: {
    items: [
      {
        id: "faq-1",
        title: "What is React?",
        content: (
          <div>
            <p>
              React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and
              isolated pieces of code called "components".
            </p>
            <ul>
              <li>Declarative</li>
              <li>Component-Based</li>
              <li>Learn Once, Write Anywhere</li>
            </ul>
          </div>
        ),
      },
      {
        id: "faq-2",
        title: "How do I get started?",
        content: (
          <div>
            <p>You can get started with React in several ways:</p>
            <ol>
              <li>Try React online with CodePen</li>
              <li>Add React to a website</li>
              <li>Create a new React app</li>
            </ol>
            <p>
              <strong>Recommended:</strong> Use Create React App for new single-page applications.
            </p>
          </div>
        ),
      },
      {
        id: "faq-3",
        title: "What are the benefits?",
        content: (
          <div>
            <p>React offers several key benefits:</p>
            <blockquote
              style={{ borderLeft: "4px solid #ccc", paddingLeft: "1rem", margin: "1rem 0", fontStyle: "italic" }}
            >
              "React makes it painless to create interactive UIs."
            </blockquote>
            <p>Key advantages include virtual DOM, component reusability, and a strong ecosystem.</p>
          </div>
        ),
      },
    ],
    allowMultiple: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Accordion with rich content including lists, blockquotes, and formatted text.",
      },
    },
  },
}

export const LongContent: Story = {
  args: {
    items: [
      {
        id: "long-1",
        title: "Long Content Section",
        content: (
          <div>
            <p>
              This section contains a lot of content to demonstrate how the accordion handles longer text and maintains
              smooth animations.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </p>
          </div>
        ),
      },
      {
        id: "long-2",
        title: "Another Section",
        content: <p>This is a shorter section for comparison.</p>,
      },
    ],
    allowMultiple: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Accordion with varying content lengths to test animation behavior.",
      },
    },
  },
}

export const Empty: Story = {
  args: {
    items: [],
    allowMultiple: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Accordion with no items.",
      },
    },
  },
}
