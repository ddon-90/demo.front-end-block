import React from 'react'
import { Box } from 'vtex.styleguide'

interface WelcomeProps {
  title: string
  backgroundColor: string
}

const Welcome = (props: WelcomeProps) => {

  const { title = "Title", backgroundColor = backgroundColors.GREY } = props
  console.log(title, backgroundColor)

  return (
    <div className="pa8" style={{ backgroundColor: backgroundColor }}>
      <Box>
        <div style={{ textAlign: "center", fontSize: "2rem" }}>
          {title}
        </div>
      </Box>
    </div>
  );
}

export const backgroundColors = {
  GREY: '#e5e7eb',
  WHITE: '#ffffff',
  GREEN: '#ecfccb',
  BLUE: '#dbeafe',
}

Welcome.schema = {
  title: 'admin/editor.title',
  description: 'admin/editor.description',
  type: 'object',
  properties: {
    title: {
      title: 'Title',
      description: 'admin/editor.property.title.description',
      type: 'string',
      default: 'Hello there!',
    },
    backgroundColor: {
      title: 'Background color',
      description: 'admin/editor.property.background-color.description',
      type: 'string',
      enum: Object.values(backgroundColors),
      enumNames: Object.keys(backgroundColors),
      default: backgroundColors.GREY,
    },
  },
}

export default Welcome