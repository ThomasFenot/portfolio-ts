import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    backgroundColor: "blue.50",
    _dark:{
      backgroundColor: "#E4E6C3",
      textColor:"black"
    }
  },
  header: {
    paddingBottom: "2px"
  },
  body: {
    paddingTop: "2px",
    maxWidth: "35em"
  },
  footer: {
    paddingTop: "4px"
  }
});

const sizes = {
  md: definePartsStyle({
    container: {
      borderRadius: "0.5em"
    }
  }),
  // define custom styles for xl size
  xl: definePartsStyle({
    container: {
      // borderRadius: "36px",
      // padding: "40px"
    }
  })
};


// define custom variant
  const variants = {
  presentationCard: definePartsStyle({
    container: {
    }
  }),
  displayCard: definePartsStyle({
    container: {
      minWidth: "14.7em",
      minHeight: "14.5em",
    }
  }),
  testing: definePartsStyle({
    container: {
      backgroundColor: "red",
      _dark:{
        backgroundColor: "red",
      },
    }
  })
};

// export the component theme
export const cardTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    // define which size and variant is applied by default
  },
});